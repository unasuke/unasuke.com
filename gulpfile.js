const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('base.scss', () => {
  return gulp.src('./source/stylesheets/source/base.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./source/stylesheets/base.css'));
})

gulp.task('index.scss', () => {
  return gulp.src('./source/stylesheets/source/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./source/stylesheets/index.css'));
})

gulp.task('sponsor.scss', () => {
  return gulp.src('./source/stylesheets/source/sponsor.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./source/stylesheets/sponsor.css'));
})

gulp.task('build', ['base.scss', 'index.scss', 'sponsor.scss']);
gulp.task('build:watch', () => {
  return gulp.watch(
    './source/stylesheets/src/*.scss',
    ['base.scss', 'index.scss', 'sponsor.scss']
  )
});
