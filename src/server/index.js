const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const apiRouter = require('./api');

const webpack = require('webpack'),
      middleware = require('webpack-dev-middleware');
      webpackHotMiddleware = require('webpack-hot-middleware'),
      webpackConfig = require('../../config/webpack/webpack.base.config'),
      apiFallBack = require('connect-history-api-fallback'),
      compiler = webpack(webpackConfig);

app.use(express.static('build'));
app.use(morgan('tiny'));

app.use('/api', apiRouter.router);

app.use(apiFallBack({
    verbose: true
}));

app.use(middleware(compiler, {
    publicPath: `/assets`,
    stats: {
        colors: true,
        chunks: false,
        'errors-only': true
    }
}));

app.use(webpackHotMiddleware(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
}));

app.listen(8080);
