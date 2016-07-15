var config = require('./webpack.base.config.js');

// source maps allow you to view the raw source in Chrome devtools
config.devtool = '#cheap-module-source-map';

module.exports = config;
