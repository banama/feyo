var gulp = require('gulp')

var jshint = require('./jshint')
var browserify = require('./browserify')
var scss = require('./scss')
var css = require('./css')
var uncss = require('./uncss')
var hash = require('./hash')
var clean = require('./clean')
var rev = require('./rev').revF


// css
gulp.task('scss', function(){
    scss.scssF('../scss/*.scss', '../css')
})

gulp.task('uncss', function(){
    uncss.uncssF('../css/*.css', ['index.html'], '../css')
})

gulp.task('cssmin', function(){
    css.cssF('../css/*.css', '../dist/css')
})

gulp.task('csshash', function(){
    // clean.cleanF('../dist/css')
    hash.hashcssF('../dist/css/*.css', '../dist/css/hash/', '../dist/css')
})

gulp.task('revcss', function(){
    rev('../dist/css/rev-manifest.json', '../jade/index.html', '../jade')
})


// js
gulp.task('jshint', function(){
    jshint.jshintF('../js/*.js')
})

gulp.task('browserify', function(){
    browserify.browserifyF('app.bundle.js', '../js/app.js', '../dist/js')
})

gulp.task('jshash', function(){
    // clean.cleanF('../dist/js')
    hash.hashjsF('../dist/js/*.js', '../dist/js/hash/', '../dist/js')       
})

gulp.task('revjs', function(){
    rev('../dist/js/rev-manifest.json', '../jade/index.html', '../jade')
})

gulp.task('clean', function(){
    clean.cleanF('../dist/')
})

gulp.task('run', function(){
    gulp.watch(['../scss/*.scss', '../css/*.css', '../css/*.css'], ['cssbase', 'revcss'])
    gulp.watch(['../js/*.js', '../js/app.js', '../dist/js/*.js'], ['jsbase', 'revjs'])
})

// test
gulp.task('uncss', function(){
    uncss.uncssF('./test/css.css', ['index.html'], './test')
})

