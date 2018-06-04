var express = require('express');
var router = express.Router();
const predict = require('./source')

//Previsao Clima, Tempo Atual, Temperatura, PH, Luminosidade, Umidade, Pluviométrico
router.post('/', function(req, res, next) {
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
  res.status(200).send({resultado: porcent})

});

module.exports = router;
