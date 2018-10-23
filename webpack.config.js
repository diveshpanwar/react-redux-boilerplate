var path = require('path');
var webpack = require('webpack');

module.exports = {
  devServer: {
    inline: true,
    contentBase: './src',
    port: 7777,
    historyApiFallback: true
  },
  mode: 'development',
  entry: './dev/js/main.js',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  output: {
    path: 'src',
    filename: 'js/bundle.min.js',
    publicPath: '/'
  },
  plugins: [new webpack.optimize.OccurrenceOrderPlugin()]
};
