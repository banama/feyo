var gulp = require('gulp');
var uncss = require('gulp-uncss');

function uncssF(cssFile, htmlFileArray, cssPath){
    return gulp.src(cssFile)
        .pipe(uncss({
            html: htmlFileArray
        }))
        .pipe(gulp.dest(cssPath))
}

exports.uncssF= uncssF;