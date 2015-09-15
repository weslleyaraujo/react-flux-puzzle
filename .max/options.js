'use strict';

var yargs = require('yargs').argv;
var config = yargs.config ? yargs.config : 'config-development.json';

module.exports = {
  config: config,
  src: {
    root: './',
    dest: 'dist',
    javascripts: {
      all: 'src/assets/javascripts/**/*.js',
      main: 'src/assets/javascripts/index.js',
      dest: 'dist/assets/javascripts/',
      bundle: 'bundle.js',
    },
    sass: 'src/assets/sass/**/*.sass',
    css: 'dist/assets/css',
    templates: 'src/templates/**/*.ejs',
    pages: 'src/*.ejs',
    data: 'src/data/',
  },
};
