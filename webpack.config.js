const path = require('path');
const argv = require('yargs').argv;
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const __HOT__ = !!argv.hot;
const __DEV__ = !!argv.dev;

const webpackConfig = {
  mode: __DEV__ ? 'development' : 'production',
  entry: {
    app: ['./src/start.js']
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
        }
      },
      {
        test: /\.(scss)$/,
        exclude: /node_modules/,
        use: [
          __DEV__ ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoader: 2
            }
          },
          'sass-loader'
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true,
    }),
    new FaviconsWebpackPlugin('./src/favicon32.png'),
    new MiniCssExtractPlugin({
      filename: 'style.css',
      chunkFilename: '[id].css'
    })
  ],
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js', '.json']
  }
};

if (__HOT__) {
  webpackConfig.entry.app.push('react-hot-loader/patch');
  webpackConfig.entry.app.push('webpack-hot-middleware/client');

  webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = webpackConfig;