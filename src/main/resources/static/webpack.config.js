/**
 * Created by HC on 2016/6/23.
 */
'use strict';

module.exports = {
    devtool: "source-map",   //执行gulp的publish任务时,需注释此行
    entry: "./js/admin/main.js",
    output: {
        path: __dirname + "/js/build",
        filename: "app.bundle.js"
    }
};

// devtool: "source-map",  //生成sourcemap,便于开发调试