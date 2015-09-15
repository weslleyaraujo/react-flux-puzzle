'use strict';

module.exports = function(gulp, globals) {

  return gulp.task('develop', function() {
    /*
     * NOTE: setting currentTask parameter as 'developer'
     * in order to identify some task actions
     */
    globals.utils.setCurrentTask('develop');

    gulp.start(['ejs', 'sass', 'javascripts']);

    globals.plugins.browserSync.create();
    globals.plugins.browserSync.init({
      server: globals.options.src.root,
      open: false
    });

    gulp.watch(globals.options.src.sass, ['sass']);
    gulp.watch(globals.options.src.javascripts.all, ['lint']);
    gulp.watch([
      globals.options.src.pages,
      globals.options.src.templates,
      globals.options.src.data + '**/*.json',
    ], ['ejs']);
  });
};
