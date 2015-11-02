'use strict';

module.exports = function(gulp, globals) {

  return gulp.task('copy', function() {
      gulp.src(globals.options.fonts.src)
        .pipe(gulp.dest(globals.options.fonts.dest));

      gulp.src(globals.options.sounds.src)
        .pipe(gulp.dest(globals.options.sounds.dest));
  });
};
