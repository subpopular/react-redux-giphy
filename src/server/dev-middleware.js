const path = require('path');
const chokidar = require('chokidar');
const webpack = require('webpack');
const webpackConfig = require('../../webpack.config');
const compiler = webpack(webpackConfig);
const watcher = chokidar.watch('./src/server/');

/**
 * This watcher clears the require module cache when files in src/server
 * are changed. This allows server-side code changes without restarting node.
 */
watcher.on('ready', function () {
  watcher.on('all', function (...args) {
    console.log('Clearing /server/ module cache from server');
    Object.keys(require.cache).forEach(function (id) {
      if (/\/src\/server\//.test(id)) {
        delete require.cache[id];
      }
    });
  });
});

/**
 * Webpack development middleware serves up assets and enables
 * hot reloading of client-side files.
 */
export default function(app) {
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}
