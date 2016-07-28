/**
 * Created by HC on 2016/7/25.
 */
var gulp = require('gulp');
var webpack = require('gulp-webpack');
var named = require('vinyl-named');
//压缩javascript文件
var uglify = require('gulp-uglify');

// 加载webpack的配置文件
var config = require('./webpack.config');

var appList = ['main'];

gulp.task('default', ['bundle'], function() {
    console.log('done')
});

gulp.task('bundle', function() {
    return gulp.src(mapFiles(appList, 'js'))
        .pipe(named())
        .pipe(webpack(config))
        //.pipe(uglify())
        .pipe(gulp.dest('dist/'))
});

gulp.task('watch', function() {
    return gulp.src(mapFiles(appList, 'js'))
        .pipe(named())
        .pipe(webpack(getConfig({watch: true})))
        .pipe(gulp.dest('dist/'))
});


/**
 * @private
 */
function getConfig(opt) {
    var config = {

        module: {
            loaders: [
                { test: /\.vue$/, loader: 'vue'}
            ]
        },
        devtool: 'source-map'
    };
    if (!opt) {
        return config
    }
    for (var i in opt) {
        config[i] = opt[i]
    }
    return config
}

/**
 * @private
 */
function mapFiles(list, extname) {
    return list.map(function (app) {return 'src/' + app + '.' + extname})
}