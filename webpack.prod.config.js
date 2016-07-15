var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.base.config.js');

config.output.path = path.resolve(__dirname, 'dist');


config.plugins = config.plugins.concat([

  // removes a lot of debugging code in React
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
  }}),

  new webpack.optimize.OccurenceOrderPlugin(),
])

module.exports = config;
