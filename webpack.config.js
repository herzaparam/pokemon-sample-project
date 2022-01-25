const path = require('path');
// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({ mode } = { mode: 'production' }) => {
  console.log(`mode is: ${mode}`);

  return {
    mode,
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.(png|svg|jpg|gif)$/,
          exclude: /node_modules/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              ouputPath: 'imgs',
            },
          },
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    devServer: {
      historyApiFallback: true,
      open: true,
      hot: true,
    },
    devtool: 'source-map',
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      // new ReactRefreshWebpackPlugin(),
    ],
  };
};
