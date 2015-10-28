'use strict';

var autoprefixer = require('autoprefixer');
var mqpacker = require('css-mqpacker');
var csswring = require('csswring');

module.exports = function(gulp, globals) {
  var processors = [];
  var prefixer = autoprefixer({
    browsers: ['last 4 versions']
  });

  processors.push(prefixer);
  processors.push(mqpacker);
  processors.push(csswring);

  gulp.task('sass', function() {
    gulp.src(globals.options.src.sass)
      .pipe(globals.utils.isDevelop() ? globals.plugins.sourcemaps.init() : globals.plugins.util.noop())
      .pipe(globals.plugins.sass({
        outputStyle: 'compressed'
      }).on('error', function(err) {
        globals.plugins.notify().write({
          title: 'Error compiling sass.',
          message: err.message
        });
      }).on('error', function (err) {
        globals.plugins.util.log(globals.plugins.util.colors.red(err.messageFormatted));
      }))
      .pipe(globals.plugins.postcss(processors))
      .pipe(globals.utils.isDevelop() ? globals.plugins.browserSync.stream() : globals.plugins.util.noop())
      .pipe(globals.utils.isDevelop() ? globals.plugins.sourcemaps.write('.') : globals.plugins.util.noop())
      .pipe(gulp.dest(globals.options.src.css));
  });
};
