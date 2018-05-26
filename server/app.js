var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const Raven = require('raven');

// Must configure Raven before doing anything else with it
Raven.config(process.env.SENTRY_DSN || '', {
  captureUnhandledRejections: true
}).install();

var usersRouter = require('./routes/users');
var blockRouter = require('./routes/block');

var app = express();

const db = mongoose.connect(process.env.MONGO_STRING)
  .then(() => {
    console.info('Successfully connected to MONGO database');
  })
  .catch((err) => {
    console.error(err);
  });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// The request handler must be the first middleware on the app
app.use(Raven.requestHandler());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/block', blockRouter);

// Fallback handler that returns react app (if we don't hit any API endpoint)
app.use('/static', express.static(path.join(__dirname, '..', 'client', 'build', 'static')));
app.use('/*', (req, res) => res.sendFile(
  path.join(__dirname, '..', 'client', 'build', 'index.html'), 
));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// The error handler must be before any other error middleware
app.use(Raven.errorHandler());

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
