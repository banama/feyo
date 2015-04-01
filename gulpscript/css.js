var gulp = require('gulp')
var rename = require('gulp-rename');
var minifycss =  require('gulp-minify-css');
var concat = require('gulp-concat');
var config = require("./config.json")

function init(task){

    gulp.task(task, function(){
        var count = config.app.style.length
        for(var i=0; i < count; i++){
            (function(index){
                var css = config.app.style[i] + 'css/*.css'
                var distcss = config.app.style[i] + 'dist/css/'
                cssF(css, distcss)
            })(i)
        }  
    })
}

function cssF(cssFile, cssPath){
    gulp.src(cssFile)
        .pipe(minifycss()) 
        .pipe(gulp.dest(cssPath));
    console.log(cssFile, '\t-->\t', cssPath)
}

exports.cssF = cssF
exports.init = init
