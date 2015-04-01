var gulp = require('gulp')
var revCollector = require('gulp-rev-collector')

function revF(revJSON, tempFile, tempPath){
    gulp.src([revJSON, tempFile])
        .pipe(revCollector({
            replaceReved: true
        }))
        .pipe(gulp.dest(tempPath))
}

exports.revF = revF
