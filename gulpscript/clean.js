var gulp = require('gulp')
var clean = require('gulp-clean')
var config = require('./config.json')

function cleanF(path){
    gulp.src(path, {read: false})
        .pipe(clean({force: true}))
}

exports.cleanF = cleanF
