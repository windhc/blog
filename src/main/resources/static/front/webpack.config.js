/**
 * Created by HC on 2016/7/25.
 */
var webpack = require('webpack');
module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname+"/dist",
        //publicPath: "/dist/",
        filename: "main.js"
    },
    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue'}
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    //watch: true,
    //devtool: 'source-map'
}