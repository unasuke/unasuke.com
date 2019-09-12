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

gulp.task('activity.scss', () => {
  return gulp.src('./source/stylesheets/src/activity.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./source/stylesheets/'));
})

gulp.task('aboutme.scss', () => {
  return gulp.src('./source/stylesheets/src/aboutme.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./source/stylesheets/'));
})

gulp.task('build', gulp.parallel('base.scss', 'index.scss', 'sponsor.scss', 'activity.scss', 'aboutme.scss'));
gulp.task('build:watch', () => {
  return gulp.watch(
    './source/stylesheets/src/*.scss',
    gulp.parallel('base.scss', 'index.scss', 'sponsor.scss', 'activity.scss', 'aboutme.scss')
  )
});
