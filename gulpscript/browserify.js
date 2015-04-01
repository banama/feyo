var gulp = require('gulp')
var browserifys = require('browserify')
var source = require('vinyl-source-stream')
var config = require("./config.json")

function init(task){

    gulp.task(task, function(){
        var count = config.app.script.length
        for(var i=0; i < count; i++){
            (function(index){
                var js = config.app.script[i] + 'js/app.js'
                var distjs = config.app.script[i] + '/dist/js/'
                browserifyF(js, distjs)
            })(i)
        }  
    })
}

function browserifyF(file, filePath){
    browserifys(file)
        .bundle()
        .pipe(source('app.bundle.js'))
        .pipe(gulp.dest(filePath))
}

exports.browserifyF = browserifyF
exports.init = init
