var express = require('express');
var router = express.Router();
const predict = require('../helpers/mlResources')

//Previsao Clima, Tempo Atual, Temperatura, PH, Luminosidade, Umidade, Pluviométrico
module.exports = (req, res) => {
  if(!req.body.previsao ||
    !req.body.climaAtual ||
    !req.body.temperatura ||
    !req.body.ph ||
    !req.body.luminosidade ||
    !req.body.umidade ||
    !req.body.pluviometrico){
    res.status(400).send('Error')
  }
  let result = predict.classify([req.body.previsao, req.body.climaAtual, req.body.temperatura,req.body.ph,req.body.luminosidade,req.body.umidade,req.body.pluviometrico])
  let porcent = Object.keys(result)[0];
  console.log(result)
  res.status(200).send({resultado: porcent})
};


// let sensors = {}
// let uv = await Uv.findOne().sort({createdAt:-1}).exec();
// let weather = await Weather.findOne().sort({createdAt:-1}).exec();
// let forecast = await Forecast.findOne().sort({createdAt:-1}).exec();
// let Soil = await Forecast.findOne().sort({createdAt:-1}).exec();