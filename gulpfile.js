'use strict';

var gulp = require('gulp');
var loader = require('gulp-multiple-loader');
var plugins = require('gulp-load-plugins')({
      pattern: ['gulp-*', 'browser-sync']
    });

var options = require('./.max/options.js');
var utils = require('./.max/utils.js');

loader.initialize(gulp, {
  globals: {
    plugins: plugins,
    options: options,
    utils: utils,
  }
});

process.on('SIGINT', function() {
  plugins.util.log(plugins.util.colors.red('Successfully closed ' + process.pid));
  process.exit(1);
});

