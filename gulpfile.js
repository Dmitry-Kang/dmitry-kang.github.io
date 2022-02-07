/**
 * Created by Dmytro on 3/27/2016.
 */

var browserify = require('browserify'),
    gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    browserSync = require('browser-sync');
var concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

/* pathConfig*/
var entryPoint = './src/index.js',
    browserDir = './',
    sassWatchPath = 'css/main.scss',
    sassWatchPath2 = 'css/**/*.scss',
    jsWatchPath = 'js/**/*.js',
    htmlWatchPath = './**/*.html';
var jsFiles = 'js/source/*.js',
    jsDest = 'js';
/**/

gulp.task('js', function() {
    return gulp.src(jsFiles)
    // return gulp.src(['themes/custom/mjh/js/source/fire.js', 'themes/custom/mjh/js/source/components.js'])
        .pipe(concat('main.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

// gulp.task('browser-sync', function() {
//     const config = {
//         server: { baseDir: browserDir }
//     };
//     return browserSync(config);
// });

gulp.task('sass', function() {
    return gulp.src(sassWatchPath)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css/'));
});

gulp.task('watch', function() {
    gulp.watch(jsWatchPath, ['js']);
    gulp.watch(sassWatchPath2, ['sass']);
    // gulp.watch(htmlWatchPath, function() {
    //     return gulp.src('')
    //         .pipe(browserSync.reload({ stream: true }))
    // });
});

// gulp.task('run', ['js', 'sass', 'watch', 'browser-sync']);
gulp.task('run', ['js', 'sass', 'watch']);