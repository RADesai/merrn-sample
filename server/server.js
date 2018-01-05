const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 3000;
const routes = require('./api/routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, '../dist')));

app.use(cors());
app.options('*', cors());
app.delete('*', cors());

const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

var compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

routes(app, express);

app.listen(port, () => console.log(`merrn-sample running on port ${port}!`));