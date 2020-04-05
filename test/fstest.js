const fs = require('fs');

console.log('경로', __dirname);

fs.readFile(`${__dirname}/test.json`, 'utf-8', (err, data) => {
    if (err) return console.error('readFile 에러발생', err);

    console.log('데이터 >> ', data);
});

console.log('---------------------------');

const msgFile = `${__dirname}/massage.text`;
fs.writeFileSync(msgFile, 'Hello Node.js 세종대왕', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
})

let data2 = fs.readFileSync(msgFile, 'utf-8');

console.log('messageFile >> ', data2);

console.log('===========================');