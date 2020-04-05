const express = require('express'),
      cors = require('cors'),
      app = express(),
      util = require('util'), // console.log 랑 util.log랑 다른데, util.log는 시간까지 같이 나온다.
      bodyParser = require('body-parser')
      

// const testJson = require('./test/test.json');
const Mydb = require('./mydb');
const rest = require('./rest');

const Pool = require('./pool');

const pool = new Pool(); // 싱글턴으로 전역에서 한번만 생성



app.use(express.static('public')); // 정적파일을 모아둔 pulic 경로를 기본사용으로 연결해 준다.
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// cors 방지 시작
// app.use( (req, res, next) => {
//     res.header("Access-Control-Allow-Origin", req.headers.origin); // 요청한 놈을 허용한다
//     res.header("Access-Control-Allow-Credentials", "true"); // 보안 관련
//     res.header("Access-Control-Allow-Headers", "Content-Type, Authorization", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // 허용하는 method

//     if (req.method === 'OPTIONS') { // 실제 요청하기 전에 서버가 정상인지 확인하기 위해 먼저 OPTIONS를 보내본다.
//         res.status(200).end();
//     } else {
//         next();
//     }
// });
app.use(cors());
// cors 방지 끝
// body-parse 사용 설정 시작
app.use(bodyParser.json({limit: '10mb'})); // limit: 해킹방지
app.use(bodyParser.urlencoded({limit: '10mb', extended: true})); //extended: true => body-pardser에 여러개의 json이 왔을때도 다 받아 주겠다는 설정
// body-parse 사용 설정 끝

// rest API 기능 모아놓고 모듈화
rest(app, pool);

const server = app.listen(7000, function() {
    console.log(`Express's started on port 7000!!`);

    const mydb = new Mydb(pool);
        mydb.executeQuery( conn => {
            console.log('시작', conn);
            conn.query('select * from test', (err, ret) => {
                console.log('데이터', ret);
                res.json(ret);
            });
        });


});

// 올라간 웹서버에 socket.io 를 얹혀서 만든다
const io = require('socket.io').listen(server, {
    log: false,
    origins: '*:*', // url이 달라도 들어올수 있게 해줌
    pingInterval: 3000, // 클라이언트와 서버가 서로 살아있는지 체크하는 간격(default: 25초, timeout: 60초)
    pingTimeout: 5000 // 응답이 없을때 5초간 기다려본다(default: 1초)
});

io.sockets.on('connection', (socket, opt) => { // connection 이벤트가 오면 시작.  이 이하로는 서버측의 처리 로직
    
    socket.emit('message', {msg: 'Welcome ' + socket.id});

    util.log('connection >> ', socket.id, socket.handshake.query);

    socket.on('join', (roomId, fn) => {
        socket.join(roomId, () => {
            util.log('You Joined room id : ', roomId, 'Room Array : ', Object.keys(socket.rooms));
            if (fn) {
                fn();
            }
        });
    });

    socket.on('leave', (roomId, fn) => { // 나가거나, 브라우저를 닫으면 자동으로 호출
        socket.leave(roomId, () => {
            util.log('You Leaved room id : ', roomId, 'Room Array : ', Object.keys(socket.rooms));
            if (fn) {
                fn();
            }
        });
    });

    socket.on('rooms', (fn) => { // 방 목록 보기
        if (fn) { // 같이 날라온 콜백 함수가 있으면 실행
            fn( Object.keys(socket.rooms));
        }
    });

    // data {room: 'roomid', msg: 'msg 내용..}
    socket.on('message', (data, fn) => {
        util.log('message >> ', data.msg, Object.keys(socket.rooms));
        socket.broadcast.to(data.room).emit('message', {room: data.room, msg: data.msg}); // 메세지를 roomd안에 있는 사용자들 전부에게 전송(나빼고)
        if (fn) {
            fn(data.msg);
        }
    });

    socket.on('message-for-one', (socketid, msg, fn) => {
        socket.broadcast.to(socketid).emit('message', {msg: msg}); 
    })

    socket.on('disconnecting', (roomId, fn) => { // 현재 방 상태 까지 알고 싶으면 disconnecting
        util.log('disconnecting >> ', socket.id, Object.keys(socket.rooms));
    });

    socket.on('disconnect', (roomId, fn) => { // 단순히 socket.id 만 쓰고 싶으면 disconnect
        util.log('disconnect >> ', socket.id, Object.keys(socket.rooms));
    });
})
