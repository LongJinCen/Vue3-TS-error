const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './src/index.ts')
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: '组件发布工程',
      template: path.resolve(__dirname, './index.html'),
      appMountId: 'app'
    })
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/], // 识别.vue单文件
            }
          }
        ],
        exclude: /node_modules/
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue']
  }
}