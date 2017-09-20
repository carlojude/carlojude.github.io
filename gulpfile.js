var gulp = require('gulp');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var replace = require('gulp-replace');
var rename = require('gulp-rename');

gulp.task('scripts', function() {
    gulp.src(['./assets/js/**/*.js', './assets/js/**/*.min.js'])
        .pipe(plumber())
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('./assets/js'))
        .pipe(reload({ stream: true }));
});

gulp.task('stylesheet', function() {
    return gulp.src('assets/scss/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        // .pipe(gulp.dest('./assets/css'))
        // .pipe(rename('main.min.css'))
        // .pipe(replace('/*!', '/*'))
        // .pipe(sass({ outputStyle: 'compressed' }))
        // .pipe(plumber())
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest('./assets/css/'))
        .pipe(reload({ stream: true }));
});

gulp.task('html', function() {
    gulp.src('./*.html')
        .pipe(reload({ stream: true }));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', function() {
    // gulp.watch('./assets/js/**/*.js', ['scripts']);
    gulp.watch('./assets/scss/**/*.scss', ['stylesheet']);
    gulp.watch('./*.html', ['html']);
});

gulp.task('default', ['stylesheet', 'html', 'browser-sync', 'watch']);