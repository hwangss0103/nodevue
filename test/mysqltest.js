const mysql = require('mysql');

const connection = mysql.createConnection({
    host    : 'localhost',
    user    : '',
    password: '',
    database: ''
});

connection.connect(); // 쿼리 시작

connection.beginTransaction(err2 => { // 한개의 트랜젝션으로 묶는다
    connection.query('select * from User', function (errror, results, fields) { // 이처럼 콜백안에 또다른 쿼리가 들어오고 ... 계속 depth가 깊어지면 콜백헬이 발생할 위헙이 높다. (ㅔpromise(bluebird) 사용하자)
        // 중간에 에러가 나거나 하면 connection이 제대로 안닫혀서 connection full이 난다든가, connection이 안 닫힌다든가 하는 복잡한 문제가 발생할 가능성이 높다.
        if (error) throw error;
        console.log('The Fist User is: ', results[0]);
       
        connection.query('update User set lastlogin=new() where uid=?', ['user2'], function(error, results, fields) { // 위의 쿼리가 끝나면 실행
            if (error) throw error;
            console.log('The updated User is: ', results);
            connection.end(); // 쿼리 끝
        });
    });
})



