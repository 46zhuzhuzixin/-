module.exports = {
    lintOnSave: false,
    //runtimeCompiler: true,
    //publicPath: '/', // 设置打包文件相对路径
    devServer: {
        // open: process.platform === 'darwin',
        // host: 'localhost',
        //去除eslint
        overlay: {
            warnings: false,
            errors: false
        },
        // port: 8080,
        // // open: true, //配置自动启动浏览器 
        // proxy: {
        //     '/api': {
        //         target: 'http://192.168.0.18:10001/', //对应自己的接口
        //         changeOrigin: true,
        //         ws: true,
        //         pathRewrite: {
        //             '^/api': ''
        //         }
        //     }
        // }
    },
}