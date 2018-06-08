require('dotenv').config()
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');



// const predict = require('./helpers/mlResources')
const cron = require('node-cron');
const {getWeatherForcast, getWeather, getUv, getSoil} = require('./helpers/helpers')

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


cron.schedule('*/30 * * * *', function(){
  getWeatherForcast();
  getWeather();
  getWeatherForcast();
  getUv();
  getSoil();
});



app.get('/', function(req, res, next) {
  res.render('index');
});

app.post('/predict', require('./routes/predict'));
app.get('/weather', require('./routes/weather'));
app.get('/forecast', require('./routes/forecast'));
app.get('/uv', require('./routes/uv'));
app.get('/sensors', require('./routes/sensors'));
app.get('/soil', require('./routes/soil'));

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
