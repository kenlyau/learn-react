const webpackMerge = require('webpack-merge')

const webpackBase = require('./webpack.config-base')
const webpackSetting = {}
const webpackConfig = webpackMerge(webpackSetting, webpackBase)

module.exports = webpackConfig
