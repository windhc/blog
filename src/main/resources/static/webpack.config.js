/**
 * Created by HC on 2016/6/23.
 */
'use strict';

module.exports = {
    devtool: "source-map",
    entry: "./js",
    output: {
        path: __dirname + "/build",
        filename: "app.js"
    }
};

// devtool: "source-map",  //生成sourcemap,便于开发调试