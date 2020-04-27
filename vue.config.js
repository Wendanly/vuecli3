const path = require('path');
console.log(path.resolve('./src'));
console.log(path.resolve(__dirname, './src'));
// console.log(__dirname);
var webpack = require('webpack');
// // 导入非 webpack 自带默认插件
let htmlWebpackPlugin = require('html-webpack-plugin');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var DashboardPlugin = require('webpack-dashboard/plugin');
function resolve(dir) {
    return path.resolve(__dirname, dir);
}


// 在这里配置
module.exports = {
    // 基本路径
    publicPath: "",
    // 输出文件目录
    // outputDir: 'dist',
    // assetsDir: 'static',
    // webpack-dev-server 相关配置
    devServer: {
        port: 8089,
        // ...
        proxy: {
            '/api': {
                // target: 'http://localhost:80',
                target: 'http://localhost:3003',
                changeOrigin: true,
                // pathRewrite:{
                //     '^/api':'',
                // }
            }
        },
    },
    productionSourceMap: false,

    chainWebpack: config => {
        config.resolve.alias
            // .set("@", path.resolve(__dirname, 'src'))
            .set("A", resolve("/src/assets"))
            .set("C", resolve('src/components'))

        // 删除这个 preload 插件。
        config.plugins.delete('preload');
        config.plugins.delete('prefetch');
    },
    configureWebpack: {
        resolve: {
            modules: ['./src/components']
        },
        // 在配置中添加插件
        plugins: [
            // 构建优化插件
            // new webpack.optimize.AggressiveSplittingPlugin({
            //     minSize: 10000, // 字节，分割点。默认：30720
            //     maxSize: 15000, // 字节，每个文件最大字节。默认：51200
            //     chunkOverhead: 0, // 默认：0
            //     entryChunkMultiplicator: 1, // 默认：1
            // }),
            // new htmlWebpackPlugin({
            //     //注意传的参数是一个对象
            //     template:'public/index.html'   //传一个模板，就是根目录下的index.html
            // })
        ]
    },


}
