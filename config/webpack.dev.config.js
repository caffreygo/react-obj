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
