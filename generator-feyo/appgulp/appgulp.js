var gulp = require('gulp')

var jshint = require('./jshint')
var browserify = require('./browserify')
var scss = require('./scss')
var css = require('./css')
// var uncss = require('./uncss')
var hash = require('./hash')
var clean = require('./clean')
var rev = require('./rev').revF

var livereload = require('gulp-livereload');


// css
gulp.task('scss', function(){
    scss.scssF('../scss/*.scss', '../css/')
})

gulp.task('cssmin', function(){
    css.cssF('../css/*.css', '../../../static/*/dist/css/')
})

gulp.task('csshash', function(){
    hash.hashcssF('../../../static/*/dist/css/*.css', '../../../static/*/dist/css/hash/', '../../../static/*/dist/css')
})

// js
gulp.task('jshint', function(){
    jshint.jshintF('../js/*.js')
})

gulp.task('browserify', function(){
    browserify.browserifyF('app.bundle.js', '../js/app.js', '../../../static/*/dist/js/')
})

gulp.task('jshash', function(){
    hash.hashjsF('../../../static/*/dist/js/*.js', '../../../static/*/dist/js/hash/', '../../../static/*/dist/js/')
})


// clean
gulp.task('cleancss', function(){
    clean.cleanF('../../../static/*/dist/css/hash/*')
})

gulp.task('cleanjs', function(){
    clean.cleanF('../../../static/*/dist/js/hash/*')
})

gulp.task('clean', function(){
    clean.cleanF('../../../static/*/dist/')
})

//live reload
gulp.task('livereload', function(){
    server.changeed('../../../templates')
})

// task
gulp.task('run', function(){
    var server = livereload.listen();
    //live reload
    // require a chrome plugin
    gulp.task('livereload', function(){
        livereload.changed('../../../templates/company/company_page')
    })
    
    gulp.watch(['../scss/*.scss'], ['cleancss', 'scss'])
    gulp.watch(['../css/*.css'], ['cssmin'])
    gulp.watch(['../../../static/*/dist/css/*.css'], ['csshash', 'build'])

    gulp.watch(['../js/*.js'], ['jshint', 'cleanjs', 'browserify'])
    gulp.watch(['../../../static/*/dist/js/*.js'], ['jshash', 'build', 'livereload'])
})

gulp.task('build', function(){
    // rev js
    rev('../../../static/*/dist/js/rev-manifest.json', '../../../templates/*.html', '../../../templates')

    //rev css
    rev('../../../static/*/dist/css/rev-manifest.json', '../../../templates/*.html', '../../../templates')
})

// gulp.task('uncss', function(){
//     uncss.uncssF('./test/css.css', ['index.html'], './test')
// })

