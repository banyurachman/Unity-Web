var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

//Compile the scss to css
gulp.task('compile', function () {
  return gulp.src('./css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

//Auto-compile
gulp.task('watch', function () {
  gulp.watch('./css/*.scss', gulp.series('compile'));
});
