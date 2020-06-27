const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-cheap-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 2000,
        historyApiFallback: true
    }
});