const path = require('path');
const webpack = require('webpack');
const express = require('express');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');

const app = express();

const compiler = webpack(config);

app.use(devMiddleware(compiler, {
    publicPath: config.output.publicPath,
    historyApiFallback: true,
    stats: {
        colors: true,
    }
}));

app.use(hotMiddleware(compiler));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(8090, function (err) {
    if (err) {
        return console.error(err);
    }

    console.log('Listening at http://localhost:8090/');
});