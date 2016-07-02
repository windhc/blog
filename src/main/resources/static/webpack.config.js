/**
 * Created by HC on 2016/6/23.
 */
'use strict';

module.exports = {
    devtool: "source-map",   //执行gulp的的压缩JS任务时,需注释此行
    entry: "./js/admin/main.js",
    output: {
        path: __dirname + "/js/build",
        filename: "app.bundle.js"
    },
    //以<script>的形式挂载到页面上来加载，但又希望能在 webpack 的模块中使用
    externals: {
        'jquery': 'jQuery'
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            //{ test: /\.js$/, loader: "jsx",exclude:"node_modules" },
            //{ test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    }
};

// devtool: "source-map",  //生成sourcemap,便于开发调试