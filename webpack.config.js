const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    index: ['webpack-dev-server/client?http://localhost:8080','./src/index.js']
  },
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: '[name].bundle.js',
    publicPath: './'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      chunks: ['index']
    })
  ],
  devServer: {
    hot: true,
    contentBase: './'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_module/,
        query: {
          presets: ['react', 'env']
        }
      },
      {
        test: /\.css/,
        loader: ['style-loader','css-loader']
      }
    ]
  }
}
