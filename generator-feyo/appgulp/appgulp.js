var gulp = require('gulp')

var jshint = require('./jshint')
var browserify = require('./browserify')
var scss = require('./scss')
var css = require('./css')
var hash = require('./hash')
var clean = require('./clean')
var rev = require('./rev').revF
var livereload = require('gulp-livereload');


var buildPath = '../../../static/'
var appname = '<%= appname %>'
var tempPath = '../../../templates/'

// css
gulp.task('scss', function(){
    scss.scssF('../scss/*.scss', '../css/')
})

gulp.task('cssmin', function(){
    css.cssF('../css/*.css', buildPath + appname + '/dist/css/')
})

gulp.task('csshash', function(){
    hash.hashcssF(buildPath + appname + '/dist/css/*.css', buildPath + appname + '/dist/css/hash/', buildPath + appname + '/dist/css')
})

// js
gulp.task('jshint', function(){
    jshint.jshintF('../js/*.js')
})

gulp.task('browserify', function(){
    browserify.browserifyF('app.bundle.js', '../js/app.js', buildPath + appname + '/dist/js/')
})

gulp.task('jshash', function(){
    hash.hashjsF(buildPath + appname + '/dist/js/*.js', buildPath + appname + '/dist/js/hash/', buildPath + appname + '/dist/js/')
})


// clean
gulp.task('cleancss', function(){
    clean.cleanF(buildPath + appname + '/dist/css/hash/*')
})

gulp.task('cleanjs', function(){
    clean.cleanF(buildPath + appname + '/dist/js/hash/*')
})

gulp.task('clean', function(){
    clean.cleanF(buildPath + appname + '/dist/')
})

// task
gulp.task('run', function(){
    var server = livereload.listen();
    //live reload
    // require a chrome plugin
    gulp.task('livereload', function(){
        livereload.changed(tempPath + appname + '/company_page')
    })

    gulp.watch(['../scss/*.scss'], ['cleancss', 'scss'])
    gulp.watch(['../css/*.css'], ['cssmin'])
    gulp.watch([buildPath + appname + '/dist/css/*.css'], ['csshash', 'build', 'livereload'])

    gulp.watch(['../js/*.js'], ['jshint', 'cleanjs', 'browserify'])
    gulp.watch([buildPath + appname + '/dist/js/*.js'], ['jshash', 'build', 'livereload'])
})

gulp.task('build', function(){
    // rev js
    rev(buildPath + appname + '/dist/js/rev-manifest.json', tempPath + '*.html', tempPath)

    //rev css
    rev(buildPath + appname + '/dist/css/rev-manifest.json', tempPath + '*.html', tempPath)
})

