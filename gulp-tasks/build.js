'use strict';

module.exports = function(gulp, globals) {
  return gulp.task('build', ['javascripts', 'sass', 'htmlmin']);
};
