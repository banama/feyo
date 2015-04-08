var gulp = require('gulp')

var jshint = require('./jshint')
var browserify = require('./browserify')
var scss = require('./scss')
var css = require('./css')
var hash = require('./hash')
var clean = require('./clean')
var rev = require('./rev').revF



// Base
gulp.task('cssbase', function(){
    scss.scssF('../scss/*.scss', '../css')
    // clean.cleanF('../dist/css')
    css.cssF('../css/*.css', '../dist/css')
    hash.hashcssF('../dist/css/*.css', '../dist/css/hash/', '../dist/css')
})

gulp.task('jsbase', function(){
    jshint.jshintF('../js/*.js')
    // clean.cleanF('../dist/js')
    browserify.browserifyF('../js/app.js', '../dist/js')
    hash.hashjsF('../dist/js/*.js', '../dist/js/hash/', '../dist/js')       
})

gulp.task('revcss', function(){
    rev('../dist/css/rev-manifest.json', '../jade/index.html', '../jade')
})

gulp.task('revjs', function(){
    rev('../dist/js/rev-manifest.json', '../jade/index.html', '../jade')
})

gulp.task('cleanbase', function(){
    clean.cleanF('../dist/')
})

gulp.task('run', function(){
    gulp.watch(['../scss/*.scss', '../css/*.css', '../css/*.css'], ['cssbase', 'revcss'])
    gulp.watch(['../js/*.js', '../js/app.js', '../dist/js/*.js'], ['jsbase', 'revjs'])
})

