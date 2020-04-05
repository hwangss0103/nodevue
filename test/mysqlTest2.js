const util = requried('util'),
      Promise = require('bluebird');

const Pool = require('../pool');

const sql1 = "update User set lastlogin=now() where uid='user1'";
const sql2 = "update User set lastlogin=now() where uid='user2'";

const pool = new Pool();



///////////////////////////// 1번
Promise.using(pool.connect(), conn => { // 최종 Best
    conn.beginTransaction( txerr => { //  트랜젝션을 시작한다.
        Promise.all([ // 쿼리를 동시에 실행한다
            conn.queryAsync(sql1),
            conn.queryAsync(sql2)
        ]).then( res => { // 모두 성공 했다면(결과는 array로 온다)
            for(let i = 0; i < res.length; i++) {
                util.log(`sql${i+1} = `, res[i].affectedRows);
                conn.commit(); // 커밋하고
                pool.end(); // 끝낸다
            }
        }).catch( err => { // 쿼리중 하나라도 에러가 났다면
            conn.rollback(); // 롤백하고
            pool.end(); // 끝낸다
        });
    })
});

// 위에 1번에 connection 맺는 코드를 매번쓰기 귀찮으니까 아래 function execute처럼 미리 만들어놓고 이렇게 호출형태로 쓸 수도 있다.
executeQuery(conn => {
    Promise.all([ // 쿼리를 동시에 실행한다
        conn.queryAsync(sql1),
        conn.queryAsync(sql2)
    ]).then( res => { // 모두 성공 했다면(결과는 array로 온다)
        for(let i = 0; i < res.length; i++) {
            util.log(`sql${i+1} = `, res[i].affectedRows);
            conn.commit(); // 커밋하고
            pool.end(); // 끝낸다
        }
    }).catch( err => { // 쿼리중 하나라도 에러가 났다면
        conn.rollback(); // 롤백하고
        pool.end(); // 끝낸다
    });
})


//////////////////////////////// 옛날방법

// Promise.using( pool.connect(), conn => {
// /////////////////////////////////
//     conn.queryAsync(sql1) //쿼리를 순차적으로 진행할때
//         .then(console.log)
//         .then(ret => {
//     }).catch(err => {
//         util.log('err>>>', err);
//     });
// ////////////////////////////////////
//     Promise.using(pool.connect(), conn => {
//         Promise.all([ // 한꺼번에 다 실행한다
//             conn.queryAsync(sql1),
//             conn.queryAsync(sql2)
//         ]).then(ret => { // 위에 쿼리 두개를 실행한 결과가 array 로 들어온다.
//             util.log('End of then !!!');
//             util.log('sql1=', ret[0].affectedRows);
//             util.log('sql2=', ret[1].affectedRows);
//             pool.end();
//         }).catch(err => {
//             util.log('err!!', err);
//             pool.end();
//         });
//     })
//     pool.end();
// })



// 위의 Best 방법을 function service화 하여 아래처럼 만들수 있다
function executeQuery(fn) {
    Promise.using(pool.connect(), conn => {
        conn.beginTransaction(txerr => {
            fn(conn);
        })
    });
}