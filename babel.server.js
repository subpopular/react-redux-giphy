'use strict';

global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DEVELOPMENT__ = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'local';

require('babel-register');
require('babel-polyfill');
require('./src/server/app');
