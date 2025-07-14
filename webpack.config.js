const path = require('path');

module.exports = {
  mode: 'development',
  entry: './Cookies_local_storage/src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'Cookies_local_storage'),
    },
    compress: true,
    port: 8080,
  },
};
