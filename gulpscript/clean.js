var gulp = require('gulp')
var clean = require('gulp-clean')

function cleanF(path){
    return gulp.src(path, {read: false})
        .pipe(clean({force: true}))
}

exports.cleanF = cleanF
