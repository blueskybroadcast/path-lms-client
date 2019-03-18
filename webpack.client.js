const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const clientConfig = {
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  devServer: {
    contentBase: path.join(__dirname, '/public'),
    watchContentBase: true,
    proxy: [
      {
        context: ['**'],
        target: 'http://localhost:3000', // server and port to redirect to
        secure: false
      }
    ],
    port: 8000
  }
};

module.exports = merge(baseConfig, clientConfig);
