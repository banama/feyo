var gulp = require('gulp')
//var rename = require('gulp-rename');
var minifycss =  require('gulp-minify-css');
//var concat = require('gulp-concat');

function cssF(cssFile, cssPath){
    return gulp.src(cssFile)
        .pipe(minifycss()) 
        .pipe(gulp.dest(cssPath));
}

exports.cssF = cssF
