
/// <reference path="typings/tsd.d.ts" />


var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('sass', function() {
    gulp.src('app/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/'));
});

gulp.task('default', function() {
    gulp.watch('app/**/*.scss', ['sass']);
});

//# sourceMappingURL=gulpfile.js.map