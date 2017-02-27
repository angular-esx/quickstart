var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var helpers = require('./helpers');

module.exports = {
  entry: {
    polyfill: './src/polyfill.js',
    vendor: './src/vendor.js',
    app: './src/app/main.js'
  },
  output: {
    publicPath: '/',
    path: './dist',
    filename: '[name].[chunkhash].js',
    chunkFilename: '[id].[chunkhash].js',
    sourceMapFilename: '[file].map'
  },
  module: {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'ngx-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.css$/,
        loader: 'raw-loader', // load style file as to string
        exclude: helpers.root('src', 'styles') // exclude /src/styles
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'], // load global styles
        include: helpers.root('src', 'styles') // include /src/styles
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfill']
    }),

    // Fix Webpack Warning https://github.com/angular/angular/issues/11580
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      __dirname
    ),

  ]
}
