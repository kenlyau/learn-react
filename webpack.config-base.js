const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

var folders = fs.readdirSync('./src')
folders = folders.filter(item => item.indexOf('learn-') > -1)

const config = {
  entry: {
    index: ['./src/index.js']
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
        test: /\.html$/,
        loader: 'html-loader?attrs=false'
      },
      {
        test: /\.css/,
        loader: ['style-loader','css-loader']
      }
    ]
  }
}
folders.map(item => {
  config.entry[item] = [`./src/${item}/index.js`]
  const htmlPlugin = new HtmlWebpackPlugin({
    template: `./src/${item}/index.html`,
    filename: `./${item}.html`,
    chunks: [`${item}`]
  })
  config.plugins.push(htmlPlugin)
})
module.exports = config
