var gulp = require('gulp')
var browserifys = require('browserify')
var source = require('vinyl-source-stream')

function browserifyF(file, filePath){
    browserifys(file)
        .bundle()
        .pipe(source('app.bundle.js'))
        .pipe(gulp.dest(filePath))
}

exports.browserifyF = browserifyF
