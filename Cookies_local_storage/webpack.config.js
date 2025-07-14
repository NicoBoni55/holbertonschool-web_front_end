const path = require('path');
const { entry, output, devServer, mode } = require('../webpack.config');


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname),
        },
        compress: true,
        port: 8000,
    },
    mode: 'development',
};