const Promise = require('bluebird')
        util  = require('util');

function executeQuery(fn) {
    Promise.using(pool.connect(), conn => {
        conn.beginTransaction(txerr => {
            fn(conn);
        });
    });
}

// executeQuery 함수를 모듈화 하여 export 한다. 그럼 밖에서 const execute = require('execute); 해서 사용하면 된다
module.exports = class {
    constructor(pool) {
        this.pool = pool;
        console.log('풀 완료', this.pool);
    }
    executeQuery(fn) { // 트랜젝션이 필요없는 용도(단순 select 등)
        Promise.using(this.pool.connect(), conn => {
            fn(conn);
        });
    };

    executeQueryTx(fn) { // 트랜젝션이 필요한 용도
        Promise.using(this.pool.connect(), conn => {
            conn.beginTransaction(txerr => {
                fn(conn);
            })
        });
    }
    
};