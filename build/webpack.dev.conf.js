'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

function resolve(dir) {
  // 上级文件夹
  return path.join(__dirname, '..', dir)
}

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  // 通过选择 development, production 或 none 之中的一个，
  // 来设置 mode 参数，你可以启用 webpack 内置在相应环境下的优化。其默认值为 production。
  // https://www.webpackjs.com/concepts/mode/
  mode: 'development',
  // 模块
  // https://www.webpackjs.com/concepts/modules/
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.dev.cssSourceMap,
      usePostCSS: true
    })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // devServer 配置
  // 以下配置应该在 /config/index.js 客制化
  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: true,
    // https://webpack.js.org/configuration/dev-server/#devserverhot
    hot: true,
    // https://webpack.js.org/configuration/dev-server/#devservercompress
    compress: true,
    // https://webpack.js.org/configuration/dev-server/#devserverhost
    host: HOST || config.dev.host,
    // https://webpack.js.org/configuration/dev-server/#devserverport
    port: PORT || config.dev.port,
    // https://webpack.js.org/configuration/dev-server/#devserveropen
    open: config.dev.autoOpenBrowser,
    // https://webpack.js.org/configuration/dev-server/#devserveroverlay
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    // The bundled files will be available in the browser under this path.
    // Imagine that the server is running under http://localhost:8080 and output.
    // filename is set to bundle.js. By default the devServer.publicPath is '/',
    // so your bundle is available as http://localhost:8080/bundle.js.
    // https://webpack.js.org/configuration/dev-server/#devserverpublicpath-
    publicPath: config.dev.assetsPublicPath,
    // https://webpack.js.org/configuration/dev-server/#devserverproxy
    proxy: config.dev.proxyTable,
    // https://webpack.js.org/configuration/dev-server/#devserverquiet-
    quiet: true, // necessary for FriendlyErrorsPlugin
    // https://webpack.js.org/configuration/dev-server/#devserverwatchoptions-
    watchOptions: {
      poll: config.dev.poll
    }
  },

  // https://webpack.js.org/concepts/plugins
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      // The file to write the HTML to. Defaults to index.html.
      filename: 'index.html',
      // webpack relative or absolute path to the template.
      // By default it will use src/index.ejs if it exists. Please see the docs for details
      template: 'index.html',
      inject: true,
      // Adds the given favicon path to the output HTML
      favicon: resolve('favicon.ico'),
      // The title to use for the generated HTML document
      title: 'vue-element-admin'
    })
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(
        new FriendlyErrorsPlugin({
          compilationSuccessInfo: {
            messages: [
              `Your application is running here: http://${
                devWebpackConfig.devServer.host
              }:${port}`
            ]
          },
          onErrors: config.dev.notifyOnErrors
            ? utils.createNotifierCallback()
            : undefined
        })
      )

      resolve(devWebpackConfig)
    }
  })
})
