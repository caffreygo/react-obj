const path = require('path')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

const devConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true, // gzip压缩
    host: '0.0.0.0', // 允许ip访问
    hot: true, // 热更新
    historyApiFallback: true, // 解决启动后刷新404
    port: 8000, // 端口
    proxy: {
      // 配置服务代理
      '/api': {
        target: 'http://localhost:3001',
        // 转换请求 /api/users 为 http://localhost:3000/users
        pathRewrite: { '^/api': '' },
        changeOrigin: true
      }
    }
  }
}

module.exports = merge(commonConfig, devConfig)
