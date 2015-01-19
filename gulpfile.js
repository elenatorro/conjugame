/********* Dependencies *********/
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var path = require('path');

/************* Tasks *************/
gulp.task('minifyconjugate', function() {
  return gulp.src('lib/*.js')
        .pipe(uglify())
        .pipe(rename('Conjugate.min.js'))
        .pipe(gulp.dest('lib/compile'));
})

gulp.task('build', function() {
  return gulp.src('lib/*js')
  .pipe(concat('Conjugate.js'))
  .pipe(gulp.dest('lib/compile'));
})


gulp.task('default', ['build', 'minifyconjugate']);
