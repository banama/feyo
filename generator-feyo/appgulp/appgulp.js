var gulp = require('gulp')
var config = require('./config.json')

var jshint = require('./jshint')
var browserify = require('./browserify')
var scss = require('./scss')
var css = require('./css')
var hash = require('./hash')
var clean = require('./clean')


// Base
gulp.task('cssbase', function(){
    scss.scssF('../scss/*.scss', '../base/css')
    css.cssF('../css/*.css', '../dist/css')
    hash.hashcssF('../dist/css/*.css', '../dist/css/hash/', '../dist/css')
})

gulp.task('jsbase', function(){
    jshint.jshintF('../js/*.js')
    browserify.browserifyF('../js/app.js', '../dist/js')
    hash.hashjsF('../dist/js/*.js', '../dist/js/hash/', '../dist/js')       
})

gulp.task('cleanbase', function(){
    clean.cleanF('../dist/')
})
gulp.task('runbase', function(){
    gulp.watch(['../scss/*.scss', '../css/*.css', '../css/*.css'], ['cssbase'])
    gulp.watch('../css/*.css', ['cssbase'])
    gulp.watch(['../js/*.js', '../js/app.js', '../dist/js/*.js'], ['jsbase'])
})

