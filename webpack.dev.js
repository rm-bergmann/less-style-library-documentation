const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const lessPluginGlob = require('less-plugin-glob');
const common = require('./webpack.common.js');
const PUBLIC_DIR = path.resolve(__dirname, 'public');
const historyApiFallback = require('connect-history-api-fallback');

const hostname = 'localhost';

const config = merge(common, {

  devtool: 'inline-source-map',
  mode: 'development',

  output: {
    filename: '[name].js',
    path: PUBLIC_DIR,
    publicPath: '/',
  },

  devServer: {
    contentBase: PUBLIC_DIR,
    historyApiFallback: true,
    inline: true,
    hot: true,
    overlay: true,
    https: false,
    port: 3200,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
              lessOptions: {
                plugins: [lessPluginGlob],
                paths: [
                  path.resolve(__dirname, 'components'),
                  path.resolve(__dirname, 'less'),
                  path.resolve(__dirname, 'node_modules'),
                ]
              },
            },
          },
        ],
      },
    ],
  },
});

module.exports = config;