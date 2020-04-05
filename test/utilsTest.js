const util = require('util');
const utils = require('../utils');

let str = 'NdeJS!!';

// let enc = utils.encrypt(str);
// util.log("enc=", enc);

// let dec = utils.decryp(enc);
// util.log("dec=", dec);

// let sha2 = utils.encryptSha2(str);
// util.log("sha2=", sha2);

let map = utils.makeMap('name', 'hong');
util.log('map >>>> ', map.get('name'));
return;

let url = 'https://naver.com';
utils.ogsInfo(url, (err, ret) => {
    util.log(err, ret);
});