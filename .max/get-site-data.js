var recursive = require('recursive-readdir-sync');
var dot = require('dot-object');
var options = require('./options.js');


var PATH = options.src.root + options.src.data;
var SRC = PATH.replace(/\/data/g, '');

function createDotSource(value) {
  return value
    .replace(/\//g, '.')
    .replace(/\.json/g, '');
}

function getFileData(source) {

  var itens = source.split(/\./);
  var filename;

  itens.shift();
  filename = itens.join('/').replace(/data\//g, '');

  // delete cache to always get the updated file
  delete require.cache[require.resolve('../' + PATH +  filename + '.json')];
  return require('../' + PATH +  filename + '.json');
}

function isJSON(value) {
  return /\.json$/.test(value);
}

module.exports = function () {

  return recursive(PATH)
    .filter(function (x) { return isJSON(x) })
    .reduce(function (curr, x) {

      var source;

      x = x.replace(SRC, '');
      source = createDotSource(x);
      dot.str(source, getFileData(source), curr);

      return curr;

    }, {});
};

