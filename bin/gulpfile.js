var gulp 	   = require('gulp'),
    sass 	   = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps'),
    nodemon    = require("gulp-nodemon"),
    exec	   = require("child_process").exec;


gulp.task('sass', ()=>{
    console.log("Compiling your sass");
   return gulp.src('../www/styles/*.scss')
	   .pipe(sourcemaps.init())
	   .pipe(sass().on('error', sass.logError))
	   .pipe(sourcemaps.write())
	   .pipe(gulp.dest('../www/styles/'))
	   .pipe(livereload());
});

gulp.task("js", ()=>{
	gulp.src('../www/**/*.js')
	.pipe(livereload());
	console.log("Js is loading");
});

gulp.task("html", ()=>{
	gulp.src("../www/**/*.html")
	.pipe(livereload());
});

gulp.task('start_server', (cb)=>{
	nodemon({
		script: 'server',
		ext: 'js html',
		env: {"NODE_ENV": "development"}
	});
});

gulp.task("watch", ()=>{

	livereload.listen();
	gulp.watch('../www/styles/*.scss', ['sass']);
	gulp.watch('../www/**/*.js', ["js"]);
	gulp.watch('../www/**/*.html', ["html"]);
});


gulp.task("default", ["start_server", "watch"]);
