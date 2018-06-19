var express = require('express');
var router = express.Router();
const predict = require('../helpers/mlResources')

//Previsao Clima, Tempo Atual, Temperatura, PH, Luminosidade, Umidade, Pluviométrico
module.exports = (req, res) => {
  let result = predict.classify([
    req.body.pluviometric,
    req.body.humidity,
    req.body.cloudness,
    req.body.pressure,
    req.body.luminosity,
    req.body.ph,
    req.body.temperature,
    req.body.forecastId,
    req.body.weatherId,
    req.body.soilMoisture,
    req.body.soilT0,
    req.body.soilT10])
  let porcent = Object.keys(result)[0];
  res.status(200).send({resultado: porcent})
};