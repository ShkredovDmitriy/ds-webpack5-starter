const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');

const paths = {
  src: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist'),
  images: path.resolve(__dirname, 'src/assets/images'),
  docs: path.resolve(__dirname, 'src/assets/documents'),
  libs: path.resolve(__dirname, 'src/app/libs'),
};

module.exports = (env) => {
  return {
    mode: 'development',
    devtool: 'eval',
    entry: './src/app/main.ts',
    output: {
      path: paths.dist,
      filename: 'js/main.min.js?[fullhash]',
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    devServer: {
      clientLogLevel: 'error',
      overlay: true,
      contentBase: paths.dist,
      open: true,
      compress: false,
      hot: true,
      port: 8080,
      host: '0.0.0.0',
    },
    plugins: [
      new Dotenv(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: paths.src + '/pages/index/index.pug',
        inject: 'body',
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: paths.images,
            to: 'images',
          },
          {
            from: paths.docs,
            to: 'documents',
          },
          {
            from: paths.libs,
            to: 'js',
          },
        ],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.pug$/,
          loader: 'pug-loader',
        },
        {
          test: /\.ts$/,
          exclude: [/node_modules/, /config/, /dist/],
          use: 'ts-loader',
        },
        {
          test: /\.js$/,
          exclude: [/node_modules/, /config/, /dist/],
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [autoprefixer()],
                },
              },
            },
            {
              loader: 'resolve-url-loader',
              options: {
                root: paths.src + '/assets/',
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.(jpg|png|webp|svg)$/,
          loader: 'file-loader',
          options: {
            publicPath: './',
            name: 'images/[name].[ext]?[hash]',
          },
        },
        {
          test: /\.(woff|woff2)$/,
          loader: 'file-loader',
          options: {
            publicPath: './',
            name: 'fonts/[name].[ext]?[hash]',
          },
        },
      ],
    },
  };
};