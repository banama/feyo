var gulp = require('gulp')
var browserifys = require('browserify')
var source = require('vinyl-source-stream')

function browserifyF(filename, file, filePath){
    browserifys(file)
        .bundle()
        .pipe(source(filename))
        .pipe(gulp.dest(filePath))
}

exports.browserifyF = browserifyF
