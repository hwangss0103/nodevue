const nodeExternals = require('webpack-node-externals');

module.export = { //  webpack으로 패키징할때 설정
    entry: './index.js', // 컴파일될 결과물
    output: { filename: './server.js' },
    target: 'node',
    externals: [nodeExternals()]
}