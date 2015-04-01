var jade = require('gulp-jade')
var gulp = require('gulp')
var source = require('vinyl-source-stream')
var config = require("./config.json")

function init(task){
    gulp.task(task, function(){
        gulp.src(config.file.temp.jade)
            .pipe(jade())
            .pipe(gulp.dest(config.path.temp.temp))
    })
}
    
exports.init = init
