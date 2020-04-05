
// module.exports = {

//     configureWebpack: {

//          devServer: {

             

//              port: '8080'

//          }

//     }

// }

module.exports = {
    devServer: {
        host: '0.0.0.0',
        port: 8700,
        https: false,
        disableHostCheck: true,
        publicPath: '/'
    }
}

