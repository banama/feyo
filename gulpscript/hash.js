var gulp = require('gulp')
var rev = require('gulp-rev')
var uglify = require('gulp-uglify');

function hashcssF(file, hashFilePath, revPath){
    return gulp.src(file)
        .pipe(rev())
        .pipe(gulp.dest(hashFilePath))
        .pipe(rev.manifest())
        .pipe(gulp.dest(revPath))
    console.log(file, '\t-->\t', hashFilePath, '  ', revPath)
}

function hashjsF(file, hashFilePath, revPath){
    return gulp.src(file)
        .pipe(uglify())
        .pipe(rev())
        .pipe(gulp.dest(hashFilePath))
        .pipe(rev.manifest())
        .pipe(gulp.dest(revPath))
    console.log(file, '\t-->\t', hashFilePath, '  ', revPath)
}

exports.hashcssF = hashcssF
exports.hashjsF = hashjsF
