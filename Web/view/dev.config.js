module.exports = require('./webpack.make.config')({
    dir: './dev',
    sourcemaps: false,
    //devtool: 'cheap-module-eval-source-map',
    devtool: '',
    minimize: false,
    chunk: true
});