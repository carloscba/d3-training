var gulp = require('gulp');
var watch = require('gulp-watch');
var webserver = require('gulp-webserver');

var src = './';
var app = './';

gulp.task('html', function(){
});

gulp.task('css', function(){
});

gulp.task('js', function(){

});

gulp.task('watch', function () {  
    gulp.watch(src + '/*.html', ['html']);
    gulp.watch(src + '/css/*.css', ['css']);
    gulp.watch(src + '/js/*.js', ['js']);
});

gulp.task('webserver', function() {
  gulp.src(app)
    .pipe(webserver({
      livereload: false,
      directoryListing: {
        enable:true,
        path: app
      },
      open: true,
      port : 3003,
    }));
});

gulp.task('default', ['watch','webserver']);