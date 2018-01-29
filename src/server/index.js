const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

const webpack = require('webpack'),
      webpackMiddleware = require('webpack-dev-middleware'),
      webpackHotMiddleware = require('webpack-hot-middleware'),
      webpackConfig = require('../../config/webpack/webpack.base.config'),
      compiler = webpack(webpackConfig);

const devMiddleware = webpackMiddleware(compiler, {
    publicPath: `/assets`,
    hot: true,
    stats: {
        colors: true,
        chunks: false,
        'errors-only': true
    }
})

app.use(morgan('tiny'));
app.use(devMiddleware);
app.use(webpackHotMiddleware(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
}));

app.get('/api/tweets', () => {
    console.log('tweet');
});

app.use('*', function (req, res, next) {
  var filename = path.join(compiler.outputPath,'index.html');
  console.log(filename);
  compiler.outputFileSystem.readFile(filename, function(err, result){
    if (err) {
      return next(err);
    }
    res.set('content-type','text/html');
    res.send(result);
    res.end();
  });
});

app.listen(8080);
