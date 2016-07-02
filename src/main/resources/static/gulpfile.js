/**
 * Created by HC on 2016/6/23.
 */
'use strict';

var gulp = require('gulp');
//压缩javascript文件
var uglify = require('gulp-uglify');
// 合并css
var concat = require('gulp-concat');
// 压缩css
var cssnano = require('gulp-cssnano');

// 静态文件打包合并，这里使用webpack负责js文件的合并
var webpack = require('gulp-webpack');
// 上传七牛sdn
var qn = require('gulp-qn');
// MD5戳
var rev = require('gulp-rev');
// 替换html中的css及js文件引入的路径
var revCollector = require('gulp-rev-collector');
// 用来执行多个任务
var runSequence = require('run-sequence');

// 加载webpack的配置文件
var config = require('./webpack.config');
// 七牛云的参数
var qiniu = {
    accessKey: 'xxxxxxxx',
    secretKey: 'xxxxxxxx',
    bucket: 'demo',
    domain: 'http://o96etydl2.bkt.clouddn.com'
};

//使用webpack来合并js
gulp.task('js', function () {
    gulp.src('./js/admin')
        .pipe(webpack(config))
        .pipe(gulp.dest('./js/build'));
});

//合并CSS
gulp.task('css', function () {
    gulp.src([
        './css/main.css',
        './css/view.css'
    ])
        .pipe(concat('app.css'))
        .pipe(gulp.dest('./build'));
});

//发布js，合并压缩，加入md5戳，发布到七牛云
gulp.task('publish-js', function () {
    return gulp.src(['./js'])
        .pipe(webpack(config))
        .pipe(uglify())
        .pipe(rev())
        .pipe(gulp.dest('./build'))
        .pipe(qn({
            qiniu: qiniu,
            prefix: 'gmap'
        }))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./build/rev/js'));
});

//发布css，合并压缩，加入md5戳，发布到七牛云
gulp.task('publish-css', function () {
    return gulp.src(['./css/main.css', './css/view.css'])
        .pipe(concat('app.css'))    //合并
        .pipe(cssnano())   //CSS压缩
        .pipe(rev())      //MD5戳
        .pipe(gulp.dest('./build'))
        .pipe(qn({
            qiniu: qiniu,
            prefix: 'gmap'
        }))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./build/rev/css'));
});

//替换html的js和css引入
gulp.task('publish-html', function () {
    return gulp.src(['./build/rev/**/*.json', './index.html'])
        .pipe(revCollector({
            dirReplacements: {
                'build/': ''
            }
        }))
        .pipe(gulp.dest('./dist/'));
});

//发布
gulp.task('publish', function (callback) {
    runSequence(
        ['publish-css', 'publish-js'],
        'publish-html',
        callback);
});

gulp.task('watch', function () {
    //gulp.watch('./css/*.css', ['css']);
    gulp.watch('./js/admin/*.js', ['js']);
});