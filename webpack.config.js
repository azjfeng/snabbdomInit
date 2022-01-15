const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
module.exports = {
  entry: {
    index: './src/index.ts',
  },
  output: {
    filename: "[name].js"
  },
  resolve: {
    extensions: ['.tsx', '.js', '.json', '.vue', '.css', '.html', '.less', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.(tsx|js|jsx)$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(ts)$/,
        use: ['ts-loader'],
        exclude: /node_modules/
      },
      // {
      //   test: /\.tsx$/,
      //   use: 'awesome-typescript-loader',
      //   exclude: /node_modules/
      // },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader',
        ]
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|jpe?g|gif|ttf)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'assets',
        },
      },
    ]
  },
  mode: "production",
  // devServer: {
  //     contentBase: path.join(__dirname, 'dist'),
  //     compress: true,
  //     port: 9000,
  // },
  plugins: [
    new HtmlWebpackPlugin({
      title: "azjfeng-boke",
      filename: "index.html",
      template: "./template/template.html",
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     { from: "src/assets", to: "assets" },
    //   ],
    // })
  ],
  //压缩代码
  optimization: {
    minimize: true,
  },
  watch: true, //用来执行热更新
}
