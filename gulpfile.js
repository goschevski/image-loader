var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

var source = './src/jquery.image-loader.js';

gulp.task('js', function () {
    return gulp.src(source)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(uglify())
        .pipe(rename('jquery.image-loader.min.js'))
        .pipe(gulp.dest('./dist'))
});

gulp.task('watch', function() {
    gulp.watch(source, ['js']);
});

gulp.task('default', ['js']);