/*
 * FIX: When an error is triggered gulp-ejs (or ejs only) creates a
 * .ejs file into the dest dir
 */
'use strict';

var data = require('../.max/get-site-data.js')();

module.exports = function(gulp, globals) {

  return gulp.task('ejs', function() {
    return gulp.src(globals.options.src.pages)
      .pipe(globals.plugins.plumber())
      .pipe(globals.plugins.ejs(data.src).on('error', function(err) {
        globals.plugins.util.log(err);
        globals.plugins.notify().write({
          title: 'Error compiling ejs.',
          /*
           * NOTE: this split fixes an error when sending any "<%" to notify..
           */
          message:  err.message.split('<')[0] + '...'
        });

      }))
      .pipe(gulp.dest(globals.options.src.root))
      .pipe(globals.plugins.browserSync.stream());
  });
};
