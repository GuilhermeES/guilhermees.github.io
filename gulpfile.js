const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

const paths = {
    scss: 'src/scss/**/*.scss',
    js: 'src/assets/js/**/*.js',
};

gulp.task('scss', function () {
    return gulp.src('src/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});

gulp.task('js', function () {
    return gulp.src(paths.js)
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
});

gulp.task('watch', function () {
    gulp.watch(paths.scss, gulp.series('scss'));
    gulp.watch(paths.js, gulp.series('js'));
});

gulp.task('default', gulp.series('scss', 'js', 'watch'));