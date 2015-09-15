/*
 * NOTE: This is the only task that runs diffently from the others
 * this approach seemed to fit better in this case
 * */
'use strict';

var browserify = require('browserify');
var sourceStream = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var babelify = require('babelify');
var watchify = require('watchify');

module.exports = function(gulp, globals, develop) {
  var bundler;

  function update() {
    bundler
      .bundle()
      .on('error', function (err) {
        globals.plugins.util.log(err.toString());
      })
      .pipe(sourceStream(globals.options.src.javascripts.bundle))
      .pipe(buffer())
      .pipe(globals.utils.isDevelop() ? globals.plugins.sourcemaps.init() : globals.plugins.util.noop())
      .pipe(globals.utils.isDevelop() ? globals.plugins.util.noop() : globals.plugins.uglify())
      .pipe(globals.utils.isDevelop() ? globals.plugins.sourcemaps.write() : globals.plugins.util.noop())
      .pipe(gulp.dest(globals.options.src.javascripts.dest))
      .pipe(globals.utils.isDevelop() ? globals.plugins.browserSync.stream() : globals.plugins.util.noop())
  };

  return gulp.task('javascripts', function() {

    bundler = browserify(globals.options.src.javascripts.main, {
      cache: {},
      packageCache: {},
      fullPaths: false
    }).transform(babelify.configure({
      optional: ['es7']
    }));

    /*
     * NOTE: the watchify will do the "watch" for js files
     */
    if(globals.utils.isDevelop()) {
      bundler = watchify(bundler);
    }

    bundler.on('update', function () {
      update();
    }).on('log', globals.plugins.util.log);

    update();

  });
};
