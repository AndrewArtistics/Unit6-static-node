const express = require('express');
const port = 3000;
const app = express();

app.set('view engine', 'pug');
app.use('/static', express.static('public'));

const mainRoute = require('./routes');
const index = require('./routes/index');
const aboutRoute = require('./routes/about');
const projectRoute = require('./routes/projects');

app.use(mainRoute);
app.use('index', index);
app.use('projects', projectRoute);
app.use('about', aboutRoute);

app.use((req, res, next) => {
  console.error('Page can\'t be found');
  const err = new Error('Not found');
  err.status = 404;
  next(err);
});

// rendering the error page
app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(500);
  res.render('error');
});

app.listen(port, (req,res)=>{
  console.log('I DON\'T KNOW WHAT\'S WRONG FUCKING KILL ME')
});