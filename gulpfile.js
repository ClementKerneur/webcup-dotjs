const gulp = require('gulp');
const babel = require('gulp-babel');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
 
gulp.task('default', ['watch']);

gulp.task('watch', ['build-dev','build-client'], function() {
	gulp.watch('src/**/*.*', ['build-dev','build-client']);
});

gulp.task('build-dev', () => {
  return gulp.src('src/**/*.js')
    .pipe(babel({
    	presets: ['es2015','react']
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('build-client', function () {
    return browserify({entries: './src/react-src/Client.js', extensions: ['.js'], debug: true})
        .transform(babelify, {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('public'));
});