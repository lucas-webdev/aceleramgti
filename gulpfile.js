var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp
        .src('src/styles/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/styles'));
});

gulp.task('watch', function() {
    gulp.watch('src/styles/**/*.scss', ['sass']);
});
