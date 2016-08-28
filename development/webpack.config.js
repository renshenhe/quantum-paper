const path = require('path');
const webpack = require('webpack');

const CarteBlanche = require('carte-blanche');

module.exports = {
  devtool: '#cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client?http://localhost:9001',
    './lib/index',
  ],
  resolve: {
    extensions: ['', '.js']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new CarteBlanche({ componentRoot: './lib/components' }),
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: path.join(__dirname, 'lib'),
    }]
  }
};