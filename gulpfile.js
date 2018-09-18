const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('base.scss', () => {
  return gulp.src('./source/stylesheets/src/base.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./source/stylesheets/'));
})

gulp.task('index.scss', () => {
  return gulp.src('./source/stylesheets/src/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./source/stylesheets/'));
})

gulp.task('sponsor.scss', () => {
  return gulp.src('./source/stylesheets/src/sponsor.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./source/stylesheets/'));
})

gulp.task('build', ['base.scss', 'index.scss', 'sponsor.scss']);
gulp.task('build:watch', () => {
  return gulp.watch(
    './source/stylesheets/src/*.scss',
    ['base.scss', 'index.scss', 'sponsor.scss']
  )
});
