var gulp = require('gulp')
var config = require('./config.json')

var jshint = require('./jshint')
var browserify = require('./browserify')
var scss = require('./scss')
var css = require('./css')
var hash = require('./hash')
var clean = require('./clean')


// 全局任务，谨慎操作
// task 列表在config.json
jshint.init(config.task.jshint)
browserify.init(config.task.browserify)
scss.init(config.task.scss)
css.init(config.task.css)
hash.init(
    config.task.cssHash,
    config.task.jsHash
)
clean.init()

// TODO templates
// TODO rev

// Base
gulp.task('cssbase', function(){
    scss.scssF('../static/base/scss/*.scss', '../static/base/css')
    css.cssF('../static/base/css/*.css', '../static/base/dist/css')
    hash.hashcssF('../static/base/dist/css/*.css', '../static/base/dist/css/hash/', '../static/base/dist/css')
})

gulp.task('jsbase', function(){
    jshint.jshintF('../static/base/js/*.js')
    browserify.browserifyF('../static/base/js/app.js', '../static/base/dist/js')
    hash.hashjsF('../static/base/dist/js/*.js', '../static/base/dist/js/hash/', '../static/base/dist/js')       
})

gulp.task('cleanbase', function(){
    clean.cleanF('../static/base/dist/')
})
gulp.task('runbase', function(){
    gulp.watch(['../static/base/scss/*.scss', '../static/base/css/*.css', '../static/base/dist/css/*.css'], ['cssbase'])
    gulp.watch('../static/base/css/*.css', ['cssbase'])
    gulp.watch(['../static/base/js/*.js', '../static/base/js/app.js', '../static/base/dist/js/*.js'], ['jsbase'])
})

