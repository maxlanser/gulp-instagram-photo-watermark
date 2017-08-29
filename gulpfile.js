var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
var watermark = require("gulp-watermark");
 
gulp.task('default', function () {
  gulp.src(['./src/*.jpg', './src/*.JPG'])
    .pipe(imageResize({
      width : 1080,
      height : 1080,
      crop : true,
      upscale : false
    }))
    .pipe(watermark({
        image: "watermark.png",
        gravity: 'SouthEast'
    }))
    .pipe(gulp.dest('./out'));
});