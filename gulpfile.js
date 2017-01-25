
var gulp = require("gulp");
var uglifycss = require("gulp-uglifycss");
gulp.task("hello", function(){console.log("hello");});

gulp.task("css", function () {
  gulp.src('src/*.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('./dist/'));
});
