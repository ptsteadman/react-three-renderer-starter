var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // base for resolving the entry is set to the directory containing this config
  // context: __dirname, 
  // the javascript file that imports assets included in the bundle
  entry: ['./src/index.js'],
  // the filename of the output bundle
  output: {filename: '[name].js'},
  module: {
    // remove this section to disable eslint linting with airbnb style guide
    // linting errors will be displayed by the webpack-dev-server
    preLoaders: [
      {
        loader: 'eslint-loader',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
      }
    ],
    // loaders pre-process files ex. turning ES2015 into browser-friendly js
    loaders: [
      {
        loader: 'babel',
        test: /\.(js|jsx)$/,
        presets: ['es2015', 'react'],
        exclude: /node_modules/,
      }
    ],
  },
  plugins: [
    // the HtmlWebpackPlugin copies the index.html file that loads the bundle
    // into the dist directory
    new HtmlWebpackPlugin({
      hash: true,
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/html/index.html'),
    }),
  ],
  eslint: {
    configFile: path.resolve(__dirname, '.eslintrc.js'),
  },
  devtool: '#source-map',
};
