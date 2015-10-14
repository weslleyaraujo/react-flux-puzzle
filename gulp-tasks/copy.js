'use strict';

module.exports = function(gulp, globals) {

  return gulp.task('copy', function() {
    return gulp.src(globals.options.fonts.src)
      .pipe(gulp.dest(globals.options.fonts.dest));
  });
};
