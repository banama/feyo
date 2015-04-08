var gulp = require('gulp')
var jshint = require('gulp-jshint')
var config = require('./config.json')

function jshintF(file){
    gulp.src(file)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))    
}

exports.jshintF = jshintF
