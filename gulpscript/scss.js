var gulp = require('gulp')
var scss = require('gulp-sass');
var config = require('./config.json')

function init(task){
    
    gulp.task(task, function(){
        var count = config.app.style.length
        for(var i=0; i < count; i++){
            (function(index){
                var scssFile = config.app.style[i] + 'scss/*.scss'
                var cssPath = config.app.style[i] + 'css/'
                scssF(scssFile, cssPath)
            })(i)
        }  
    })

}

function scssF(scssFile, cssPath){
    gulp.src(scssFile)
        .pipe(scss())
        .pipe(gulp.dest(cssPath));
    console.log(scssFile, '\t-->\t', cssPath)
}

exports.scssF = scssF
exports.init = init

