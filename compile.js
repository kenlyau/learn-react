const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const path = require('path')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const express = require('express')
const app = express()
const webpackBase = require('./webpack.config-base.js')
const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true&path=http://127.0.0.1:3001/__webpack_hmr'

const webpackSetting = {
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
const webpackConfig = webpackMerge(webpackSetting, webpackBase)
Object.keys(webpackConfig.entry).map(key => {
  webpackConfig.entry[key].push(hotMiddlewareScript)
})
const compiler = webpack(webpackConfig)

app.use(webpackDevMiddleware(compiler, {
  publicPath: 'http://127.0.0.1:3001',
  noInfo: true,
  stats: {colors: true}
}))

app.use(webpackHotMiddleware(compiler))

app.listen(3001, () => console.log('dev server is runing on port:3001'))