var gulp = require('gulp')
var clean = require('gulp-clean')
var config = require('./config.json')

function init(){
    // cleanF('../static/base/dist')
    // cleanF('../static/activity/dsit')
}

function cleanF(path){
    gulp.src(path, {read: false})
        .pipe(clean())
}

exports.cleanF = cleanF
exports.init = init
