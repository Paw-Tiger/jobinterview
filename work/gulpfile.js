var gulp = require('gulp');
var concatCSS = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var imageop = require('gulp-image-optimization');
var browserSync = require('browser-sync');
var g_jade = require('gulp-jade');

gulp.task('default',['jade','concated','watch'], function() {
    browserSync.init({
        server: '../html'
    });
});

gulp.task('jade', [], function() {
    gulp.src('./jade/*.jade')
        .pipe(g_jade({
            pretty: true
        }).on('error', console.error))
        .pipe(gulp.dest('../html/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});


gulp.task('concated', function() {
    return gulp.src('css/*.css')
        .pipe(concatCSS("bundle.css"))
        .pipe(gulp.dest('../html/assets/css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename("bundle.min.css"))
        .pipe(gulp.dest('../html/assets/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});


gulp.task('images', function(cb) {
    gulp.src(['./images/**/*.png', './images/**/*.jpg', './images/**/*.gif', './images/**/*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('../html/assets/images')).on('end', cb).on('error', cb);
});
gulp.task('watch', [], function() {
    //gulp.watch('./scss/**/*.scss', ['scss']);
   // gulp.watch('./scss/**/*.scss', ['styles']);
    gulp.watch('jade/*.jade', ['jade']);
    gulp.watch('css/*.css', ['concated'])

});

