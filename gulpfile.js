
/// <reference path="typings/tsd.d.ts" />


var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sadfss', function() {
    gulp.src('*.scss')
        .pipe(sass())
        .pipe(gulp.dest(function(f) {
            return f.base;
        }))
});

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/content/'));
});

gulp.task('build', function() {
    gulp.watch('app/**/*.scss', ['sass']);
});

//# sourceMappingURL=gulpfile.js.map