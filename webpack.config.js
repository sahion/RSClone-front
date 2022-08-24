const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const baseConfig = {
    entry: {
      main: './src/main.ts',
      user: './src/user.ts', 
    },    
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
              test: /\.ts$/i, 
              use: 'ts-loader'
            },
            {
              test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
              type: 'asset/resource',
              generator: {
                filename: 'assets/[name][ext]',
              }
            },
            {
              test: /\.(s[ac]|c)ss$/i, 
              use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                'sass-loader',
              ],
            },
        ],
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[hash][ext][query]',
        clean: true,
    },
    devtool: 'source-map',
    devServer: {
      hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/main.html',
          inject: true,
          chunks: ['main'],
          filename: 'main.html'
        }),
        new HtmlWebpackPlugin({
          template: './src/user.html',
          inject: true,
          chunks: ['user'],
          filename: 'user.html'
      }),
        new MiniCssExtractPlugin({
          filename: '[name].css',
        }),
        new CleanWebpackPlugin(),
        new ESLintPlugin({ extensions: ['ts'] }),
        new CopyPlugin({
          patterns: [
            { from: "src/components/assets/", to: "assets" },            
          ],
        }),
    ],
};

module.exports = ({ mode }) => {
    const isProductionMode = mode === 'prod';
    const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

    return merge(baseConfig, envConfig);
};
