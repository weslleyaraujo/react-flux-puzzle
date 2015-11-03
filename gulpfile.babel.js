import gulp from 'gulp';
import watchify from 'watchify';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import uglify from 'gulp-uglify';

const PATHS = {
  SRC: 'src/assets',
  DIST: 'dist/assets',
};

function startBundler(pack) {
  return pack
    .bundle()
    .on('error', (err) => console.log(err))
    .pipe(source('index.js'))
    .pipe(buffer())
    .pipe(gulp.dest(`${PATHS.DIST}/js`));
}

gulp.task('watchify', () => {
  let pack = browserify(`${PATHS.SRC}/js/index.js`)
    .transform(babelify);

  startBundler(pack);
  // pack.on('update', () => setBundler(pack));
});
