var gulp = require('gulp')
var jshint = require('gulp-jshint')

function jshintF(file){
    gulp.src(file)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))    
}

exports.jshintF = jshintF
