'use strict';

module.exports = function(gulp, globals) {

  globals.plugins.notify.logLevel(0);

  return gulp.task('lint', function() {
    return gulp.src(globals.options.src.javascripts.all)
      .pipe(globals.plugins.cached('lint'))
      .pipe(globals.plugins.eslint({
        useEslintrc: true,
      }))
      .pipe(globals.plugins.eslint.formatEach('stylish'))
      .pipe(globals.plugins.notify(function(file){
        var errors = []
        var filename = file.eslint.filePath.split('/');

        file.eslint.messages.forEach(function (error) {
          errors.push(['line: ', error.line, ' column: ', error.column, ': ', error.message].join(''));
        });

        return errors.length ? (filename[filename.length - 1] + '\n' + errors.join('\n')) : false;
      }));
  });

};
