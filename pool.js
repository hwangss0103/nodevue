const mysql = require('mysql'),
      util  = require('util'),
      Promise = require('bluebird');

Promise.promisifyAll(mysql); // Promise.promistyAll => promise로 mysql을 부른다(then(), catch() 등을 연결해서 쓸수 있다)
Promise.promisifyAll(require('mysql/lib/Connection').prototype);
Promise.promisifyAll(require('mysql/lib/Pool').prototype);

const DB_INFO = {
    // host    : '127.0.0.1',
    // user    : 'root',
    // password: 'rjsgoekarmvl',
    // port: 3306,
    // database: 'korean_db',
    // // multipleStatements: true,
    // connectionLimit: 5,
    // // waitForConnection: false

    host    : 'localhost',
    user    : 'testuser',
    password: 'testuser!@#',
    database: 'testdb',
    multipleStatements: true,
    connectionLimit: 5,
    waitForConnection: false
};

// const DB_INFO = {
//     host    : '1.233.173.149',
//     port: 3306,
//     user    : 'hwang',
//     password: '1234',
//     database: 'Korean_db',
//     connectionLimit : 1000,
//     connectTimeout  : 60 * 60 * 1000,
//     acquireTimeout  : 60 * 60 * 1000,
//     timeout         : 60 * 60 * 1000,
//     multipleStatements: true,
//     waitForConnection: false
// }

module.exports = class {
    constructor(dbinfo) {
        dbinfo = dbinfo || DB_INFO;
        this.pool = mysql.createPool(dbinfo);
        util.log('연결 시작');
    }

    connect() { // 최초 db와 연결을 맺는다.
        util.log('연결해보즈아');
        return this.pool.getConnectionAsync().disposer(conn => { // disposer : 만들어진 커넥션을 다 쓰고 나서 이 프로세스가 종료되어서 닫아야될 시점에 disposer 가 자동으로 호출된다.
            util.log('연결완료');
            return conn.release(); // close == release (종료, 쉬다)
        });
    }

    end() {
        this.pool.end( err => { // 메모리에 있는 모든 풀을 해제한다.
            util.log('>>>>>>>>>>>>>> End of Pool !!');
            if (err) {
                util.log('ERR Pool ending !!');
            }
        });
    }
}