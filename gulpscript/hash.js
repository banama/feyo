var gulp = require('gulp')
var rev = require('gulp-rev')
var uglify = require('gulp-uglify');
var config = require('./config.json')

function init(cssHash, jsHash, cssRev, jsRev){

    gulp.task(cssHash, function(){
        var count = config.app.style.length
        for(var i=0; i < count; i++){
            (function(index){
                var distcss = config.app.style[i] + 'dist/css/*.css'
                var hashcss = config.app.style[i] + 'dist/css/hash/'
                var revs = config.app.style[i] + 'dist/css/'
                hashcssF(distcss, hashcss, revs)
            })(i)
        }
    })

    gulp.task(jsHash, function(){
        var count = config.app.script.length;
        for(var i=0; i < count; i++){
            (function(index){
                var distjs = config.app.script[i] + 'dist/js/*.js'
                var hashjs = config.app.script[i] + 'dist/js/hash/'
                var revs = config.app.script[i] + 'dist/js'
                hashjsF(distjs, hashjs, revs)
            })(i)
        }
    })
}

function hashcssF(file, hashFilePath, revPath){
    gulp.src(file)
        .pipe(rev())
        .pipe(gulp.dest(hashFilePath))
        .pipe(rev.manifest())
        .pipe(gulp.dest(revPath))
    console.log(file, '\t-->\t', hashFilePath, '  ', revPath)
}

function hashjsF(file, hashFilePath, revPath){
    gulp.src(file)
        .pipe(uglify())
        .pipe(rev())
        .pipe(gulp.dest(hashFilePath))
        .pipe(rev.manifest())
        .pipe(gulp.dest(revPath))
    console.log(file, '\t-->\t', hashFilePath, '  ', revPath)
}

exports.hashcssF = hashcssF
exports.hashjsF = hashjsF
exports.init = init
