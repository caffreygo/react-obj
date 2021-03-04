// webpack.dev.config.js
const path = require('path')

module.exports = {
  /* 入口 */
  entry: path.join(__dirname, '../src/index.js'),
  /* 输出到dist目录，输出文件名字为bundle.js */
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true, // gzip压缩
    host: '0.0.0.0', // 允许ip访问
    hot: true, // 热更新
    historyApiFallback: true, // 解决启动后刷新404
    port: 8000 // 端口
  },
  /* cacheDirectory是用来缓存编译结果，下次编译加速 */
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader?cacheDirectory=true'],
        include: path.join(__dirname, '../src')
      }
    ]
  }
}
