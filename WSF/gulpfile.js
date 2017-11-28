var gulp = require('gulp');
var run = require('gulp-run');
var clean = require('gulp-clean');

gulp.task('clean-previous', function(){
	return run('npm run package-win').exec()
	.pipe(gulp.dest('output'));
});

gulp.task('run-package-win', function(){
	return gulp.src('release-builds', {read: false})
        .pipe(clean());
});

gulp.task('default', ['clean-previous', 'run-package-win']);