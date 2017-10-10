const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const webpackBase = require('./webpack.config-base')
const webpackSetting = {}
const webpackConfig = webpackMerge(webpackSetting, webpackBase)

module.exports = webpackConfig

