const express = require('express');
const data = require('./data.json').projects;
const http = require('http');

const app = express();
app.set('view engine', 'pug');
app.use('/static', express.static('public'));

const mainRoute = require('./routes');
const aboutRoute = require('./routes/about');
const projectRoute = require('./routes/projects');

app.use(mainRoute);
app.use('./about', aboutRoute);
app.use('./projects', projectRoute);

