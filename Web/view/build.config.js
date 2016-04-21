module.exports = require('./webpack.make.config')({
    dir: './build',
    sourcemaps: false,
    devtool: '',
    minimize: true,
    chunk: true
});