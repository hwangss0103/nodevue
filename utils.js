const ogs = require('open-graph-scraper'),
HashMap = require('hashmap'),
Crypto = require('crypto-js'),
SHA256 = ('crypto-js/sha256');

const EKey = 'nodeVue';

module.exports  = {

    // 단방향 암호화 (실전에서 쓸때는 단방향 암호화를 받아서 저장한다(로그인 정보 등))
    encryptSha2(data, key) {
        if (!data) return null;
        key = key || EKey;

        try {
            return Crypto.SHA256(data + key).toString();
        } catch {
            console.error('Error on encrtpySha2::', err);
        }
    },

    //양방향 암호화 - 암호화
    encrypt(data, key) {
        return Crypto.AES.encrypt(data, key || EKey).toString();
    },
    //양방향 암호화 - 복호화
    decryp(data, key) {
        return Crypto.AES.decrypt(data, key || EKey).toString(Crypto.enc.Utf8);
    },

    ogsInfo(url, fn) {
        return ogs({url: url}, (err, ret) => {
            fn(err, ret);
        });
    },

    makeMap(key, value) {
        const map = new HashMap();
        map.set(key, value);
        console.log('TTT>>', map.get(key));
        return map;
    }
}