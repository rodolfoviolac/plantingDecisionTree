var express = require('express');
var router = express.Router();
const predict = require('../helpers/mlResources')

//Previsao Clima, Tempo Atual, Temperatura, PH, Luminosidade, Umidade, Pluviométrico
module.exports = (req, res) => {
   // if(req.body.weatherId > 200 &&
   //   req.body.forecastId  > 200 &&
   //   req.body.soilMoisture > 0 &&
   //   req.body.soilT0 > 0 &&
   //   req.body.soilT10 > 0 &&
   //   req.body.temperature > 0 &&
   //   req.body.ph > 0 &&
   //   req.body.luminosity > 0 &&
   //   req.body.humidity > 0 &&
   //   req.body.pluviometric > 0 &&
   //   req.body.cloudness > 0 &&
   //   req.body.pressure> 0) res.status(400).send('Error')

  let result = predict.classify([
    req.body.weatherId,
    req.body.forecastId,
    req.body.soilMoisture,
    req.body.soilT0,
    req.body.soilT10,
    req.body.temperature,
    req.body.ph,
    req.body.luminosity,
    req.body.humidity,
    req.body.pluviometric,
    req.body.cloudness,
    req.body.pressure])
  let porcent = Object.keys(result)[0];
  console.log(result)
  res.status(200).send({resultado: porcent})
};