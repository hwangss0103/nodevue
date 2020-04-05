Mydb = require('./mydb');
util  = require('util');

function fn(app, pool) {
    app.get('/', (req, res) => {
        res.render('index', {name: '홍길동'});
    });
    
    app.get('/test/:email', (req, res) => {
        testJson.email = req.params.email; // cf.  req.body, req.query
        testJson.property_1 = req.query.property_1;
        res.json(testJson);
    });
    
    //// 설문 관련
    app.get('/apis/replies/:bno', (req, res) => {
        let bno = req.params.bno;
        util.log('bno : ', bno);
        const mydb = new Mydb(pool);
        mydb.executeQuery( conn => {
            conn.query('select * from Reply where bno=? limit 10', [bno], (err, ret) => {
                res.json(ret);
            });
        });
    });

    app.get('/apis/replies/:bno/:rno', (req, res) => {
        let bno = req.params.bno
            rno = req.params.rno;
        const mydb = new Mydb(pool);
        mydb.executeQuery( conn => {
            conn.query('select * from Reply where rno=? ', [rno], (err, ret) => {
                res.json(ret[0]); // 한개만 가져오므로
            });
        });
    });
    
    app.put('/apis/replies/:bno/:rno', (req, res) => {
        let bno = req.params.bno,
            rno = req.params.rno,
            replytext = req.body.replytext;
        const mydb = new Mydb(pool);
        mydb.executeQueryTx( conn => {
            conn.query('update Reply set replytext = ? where rno= ?', [replytext, rno], (err, ret) => {
                if (err) {
                    conn.rollback();
                    throw err;
                }

                res.json(ret.affectedRows);
                conn.commit();
            });
        });
    });
     
    app.get('/dbtest/:user', (req, res) => {
        let user = req.params.user;
        const mydb = new Mydb(pool);
        mydb.executeQuery( conn => {
            conn.query('select * from user where id=?', [user], (err, ret) => {
                res.json(ret);
            });
        });
    });

    // words
    app.get('/apis/words', (req, res) => {
        util.log('워드노트');
        const mydb = new Mydb(pool);
        mydb.executeQuery( conn => {
            conn.query('select * from test', (err, ret) => {
                res.json(ret);
            });
        });
    });

    app.get('/apis/surveys', (req, res) => {
        const mydb = new Mydb(pool);
        mydb.executeQuery( conn => {
            conn.query('select * from Survey limit 1000', (err, ret) => {
                res.json(ret);
            });
        });
    });
    


    //survey
    app.post('/apis/adminkey', (req, res) => {
        let key = req.body.key;
        if (key === '1212' || key === 'surveykey!!!') {
            res.status(200).json({});
        } else {
            res.status(403).json({});
        }
    });

    app.get('/apis/surveys', (req, res) => {
        const mydb = new Mydb(pool);
        mydb.executeQuery( conn => {
            conn.query('select * from Survey limit 1000', (err, ret) => {
                res.json(ret);
            });
        });
    });

    app.get('/apis/surveys/:id', (req, res) => {
        let id = req.params.id
        const mydb = new Mydb(pool);
        mydb.executeQuery( conn => {
            conn.query('select * from Survey where id = ?', [id], (err, ret) => {
                if (err) throw err;
                res.json(ret[0]);
            });
        });
    });

    app.put('/apis/surveys/:id', (req, res) => {
        let id = req.params.id,
            title = req.body.title,
            state = req.body.state;
        const mydb = new Mydb(pool);
        mydb.executeQueryTx( conn => {
            conn.query('update Survey set title = ?, state = ? where id = ?', [title, state, id], (err, ret) => {
                if (err) {
                    conn.rollback();
                    throw err;
                }
                res.json(ret.affectedRows);
            });
        });
    });

    app.post('/apis/surveys', (req, res) => {
        let title = req.body.title,
             mydb = new Mydb(pool);
        mydb.executeQueryTx( conn => {
            conn.query('insert into Survey(title, state) values(?, 0)', [title], (err, ret) => {
                if (err) {
                    conn.rollback();
                    throw err;
                }
                res.json(ret.affectedRows);
            });
        });
    });



    // words

}

module.exports = fn;