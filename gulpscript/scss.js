var gulp = require('gulp')
var scss = require('gulp-sass');
var config = require('./config.json')

function scssF(scssFile, cssPath){
    gulp.src(scssFile)
        .pipe(scss())
        .pipe(gulp.dest(cssPath));
    console.log(scssFile, '\t-->\t', cssPath)
}

exports.scssF = scssF
