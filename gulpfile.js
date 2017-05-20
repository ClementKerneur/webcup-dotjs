const gulp = require('gulp');
const babel = require('gulp-babel');
 
gulp.task('default', ['watch']);

gulp.task('watch', ['build-dev'], function() {
	gulp.watch('src/**/*.*', ['build-dev']);
});

gulp.task('build-dev', () => {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            presets: ['es2015','react']
        }))
        .pipe(gulp.dest('dist'));
});