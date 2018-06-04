var ml = require('machine_learning');

//
//Previsao Clima, Tempo Atual, Temperatura, PH, Luminosidade, Umidade, Pluviométrico
let res = [];
let dat = []
let i;
let quantidadeAmostra = 300;
//Gera Valores Randomicos Para Chuva Chuva
for(i=0; i<quantidadeAmostra; i++) {
  let pluviometrico = Math.round(getRandomArbitrary(60,100));
  let umidade = Math.round(getRandomArbitrary(80,100));
  let luminosidade = Math.round(getRandomArbitrary(0,12));
  let ph = Math.round(getRandomArbitrary(0,7));
  let temperatura = Math.round(getRandomArbitrary(-50,25));
  dat.push(['Chuva', 'Chuva', temperatura, ph, luminosidade, umidade, pluviometrico])
  res.push(Math.round(getRandomArbitrary(0,45)));
}
//Gera Valores Randomicos Para Sol Chuva
for(i=0; i<quantidadeAmostra; i++) {
  let pluviometrico = Math.round(getRandomArbitrary(30,100));
  let umidade = Math.round(getRandomArbitrary(50,100));
  let luminosidade = Math.round(getRandomArbitrary(0,12));
  let ph = Math.round(getRandomArbitrary(0,9));
  let temperatura = Math.round(getRandomArbitrary(-50,29));
  dat.push(['Sol', 'Chuva', temperatura, ph, luminosidade,umidade, pluviometrico])
  res.push(Math.round(getRandomArbitrary(45,100)));
}
//Gera Valores Randomicos Para Nubaldo Chuva
for(i=0; i<quantidadeAmostra; i++) {
  let pluviometrico = Math.round(getRandomArbitrary(80,100));
  let umidade = Math.round(getRandomArbitrary(70,100));
  let luminosidade = Math.round(getRandomArbitrary(0,6));
  let ph = Math.round(getRandomArbitrary(0,13));
  let temperatura = Math.round(getRandomArbitrary(-30,25));
  dat.push(['Nubaldo', 'Chuva', temperatura, ph, luminosidade,umidade, pluviometrico])
  res.push(Math.round(getRandomArbitrary(12,60)));
}

//Gera Valores Randomicos Para Sol Sol
for(i=0; i<quantidadeAmostra; i++) {
  let pluviometrico = Math.round(getRandomArbitrary(0,20));
  let umidade = Math.round(getRandomArbitrary(0,40));
  let luminosidade = Math.round(getRandomArbitrary(12,24));
  let ph = Math.round(getRandomArbitrary(4,13));
  let temperatura = Math.round(getRandomArbitrary(15,38));
  dat.push(['Sol', 'Sol', temperatura, ph, luminosidade,umidade, pluviometrico])
  res.push(Math.round(getRandomArbitrary(45,75)));
}
//Gera Valores Randomicos Para Chuva Sol
for(i=0; i<quantidadeAmostra; i++) {
  let pluviometrico = Math.round(getRandomArbitrary(0,10));
  let umidade = Math.round(getRandomArbitrary(0,50));
  let luminosidade = Math.round(getRandomArbitrary(12,24));
  let ph = Math.round(getRandomArbitrary(2,13));
  let temperatura = Math.round(getRandomArbitrary(2,45));
  dat.push(['Chuva', 'Sol', temperatura, ph, luminosidade,umidade, pluviometrico])
  res.push(Math.round(getRandomArbitrary(80,100)));
}
//Gera Valores Randomicos Para Nublado Sol
for(i=0; i<quantidadeAmostra; i++) {
  let pluviometrico = Math.round(getRandomArbitrary(0,10));
  let umidade = Math.round(getRandomArbitrary(0,50));
  let luminosidade = Math.round(getRandomArbitrary(3,15));
  let ph = Math.round(getRandomArbitrary(0,13));
  let temperatura = Math.round(getRandomArbitrary(-15,38));
  dat.push(['Nublado', 'Sol', temperatura, ph, luminosidade,umidade, pluviometrico])
  res.push(Math.round(getRandomArbitrary(45,90)));
}

//Gera Valores Randomicos Para Chuva Nublado
for(i=0; i<quantidadeAmostra; i++) {
  let pluviometrico = Math.round(getRandomArbitrary(0,30));
  let umidade = Math.round(getRandomArbitrary(0,70));
  let luminosidade = Math.round(getRandomArbitrary(0,7));
  let ph = Math.round(getRandomArbitrary(0,14));
  let temperatura = Math.round(getRandomArbitrary(-50,28));
  dat.push(['Chuva', 'Nublado', temperatura, ph, luminosidade,umidade, pluviometrico])
  res.push(Math.round(getRandomArbitrary(10,65)));
}
//Gera Valores Randomicos Para Sol Nublado
for(i=0; i<quantidadeAmostra; i++) {
  let pluviometrico = Math.round(getRandomArbitrary(0,30));
  let umidade = Math.round(getRandomArbitrary(0,65));
  let luminosidade = Math.round(getRandomArbitrary(5,21));
  let ph = Math.round(getRandomArbitrary(0,14));
  let temperatura = Math.round(getRandomArbitrary(-15,35));
  dat.push(['Sol', 'Nublado', temperatura, ph, luminosidade,umidade, pluviometrico])
  res.push(Math.round(getRandomArbitrary(8,65)));
}
//Gera Valores Randomicos Para Nublado Nublado
for(i=0; i<quantidadeAmostra; i++) {
  let pluviometrico = Math.round(getRandomArbitrary(0,15));
  let umidade = Math.round(getRandomArbitrary(0,80));
  let luminosidade = Math.round(getRandomArbitrary(3,12));
  let ph = Math.round(getRandomArbitrary(0,14));
  let temperatura = Math.round(getRandomArbitrary(-50,42));
  dat.push(['Nublado', 'Nublado', temperatura, ph, luminosidade,umidade, pluviometrico])
  res.push(Math.round(getRandomArbitrary(15,55)));
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

var dt = new ml.DecisionTree({
  data : dat,
  result : res
});

module.exports = dt;