/**
* TODO: Write site name in gitignore
*/

'use strict';

module.exports = function(gulp, globals) {
  return gulp.task('clean', function() {
    return gulp.src(globals.options.src.dest)
      .pipe(globals.plugins.clean());
  });
};
