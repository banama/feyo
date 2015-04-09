var gulp = require('gulp')

var jshint = require('./jshint')
var browserify = require('./browserify')
var scss = require('./scss')
var css = require('./css')
// var uncss = require('./uncss')
var hash = require('./hash')
var clean = require('./clean')
var rev = require('./rev').revF


// css
gulp.task('scss', function(){
    scss.scssF('../scss/*.scss', '../css')
})

// gulp.task('uncss', function(){
//     uncss.uncssF('../css/*.css', ['index.html'], '../css')
// })

gulp.task('cssmin', function(){
    css.cssF('../css/*.css', '../dist/css')
})

gulp.task('csshash', function(){
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
    hash.hashjsF('../dist/js/*.js', '../dist/js/hash/', '../dist/js')
})


// clean
gulp.task('cleancss', function(){
    clean.cleanF('../dist/css/hash/')
})

gulp.task('cleanjs', function(){
    clean.cleanF('../dist/js/hash/')
})

gulp.task('clean', function(){
    clean.cleanF('../dist/')
})

// task
gulp.task('run', function(){
    gulp.watch(['../scss/*.scss'], ['cleancss', 'scss'])
    gulp.watch(['../css/*.css'], ['cssmin'])
    gulp.watch(['../dist/css/*.css'], ['csshash'])
    gulp.watch(['../dist/css/hash/*.css'], ['revcss'])

    gulp.watch(['../js/*.js'], ['jshint', 'cleanjs', 'browserify'])
    gulp.watch(['../dist/js/*.js'], ['jshash'])
    gulp.watch(['../dist/js/hash/*.js'], ['revjs'])
})

gulp.task('build', function(){
    // rev js
    rev('../dist/js/rev-manifest.json', '../jade/index.html', '../jade')

    //rev css
    rev('../dist/css/rev-manifest.json', '../jade/index.html', '../jade')
})

// test
// gulp.task('uncss', function(){
//     uncss.uncssF('./test/css.css', ['index.html'], './test')
// })

