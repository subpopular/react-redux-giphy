import testdom from 'testdom';

testdom('<!doctype html><html><body></body></html>');

require('css-modules-require-hook')({
  extensions: ['.scss'],
  generateScopedName: function (exportedName, exportedPath) {
    var path = exportedPath.substr(1).replace(/\//g, '-').replace('.css', '');
    return path + '-' + exportedName;
  }
});

require('babel-register')({ plugins: ['rewire'] });
require('babel-polyfill');
