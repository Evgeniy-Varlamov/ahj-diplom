const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    },
    {
      test: /\.html$/,
      use: [{
        loader: 'html-loader',
      }],
    },
    {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader, 'css-loader',
      ],
    },
    {
      test: /\.(png|jpg|gif|ico)$/i,
      use: [{
        loader: 'file-loader',
        options: {
          esModule: false,
          name: '[name].[ext]',
        },
      }],
    },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
      // favicon: './src/favicon.ico'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
/*  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'https://ahj-diplom.herokuapp.com/',
        changeOrigin: true,
        pathRewrite: { '^/api/': '' },
        // secure: false,
      },
    },
  }, */
};
