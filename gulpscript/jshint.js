var gulp = require('gulp')
var jshint = require('gulp-jshint')
var config = require('./config.json')

function init(task){

    gulp.task(task, function(){
        var count = config.app.script.length
        for(var i=0; i < count; i++){
            (function(index){
                var js = config.app.script[i] + 'js/*.js'
                jshintF(js)
            })(i)
        }  
    })
}

function jshintF(file){
    gulp.src(file)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))    
}

exports.jshintF = jshintF
exports.init = init
