var ml = require('machine_learning');

//
//Previsao Clima, Tempo Atual, Temperatura, PH, Luminosidade, Umidade, Pluviométrico
let res = [];
let dat = []
let i, pluviometric, humidity, cloudness, pressure, ph, temperature, luminosity, forecastId, weatherId, soilMoisture, soilT0, soilT10;
let quantidadeAmostra = 800;

for(i=0; i<quantidadeAmostra; i++) {
  pluviometric =  Math.round(getRandomArbitrary(100,150));
  humidity =      Math.round(getRandomArbitrary(50,100))
  cloudness =     Math.round(getRandomArbitrary(0,30));
  pressure =      Math.round(getRandomArbitrary(950,1050));
  luminosity =    Math.round(getRandomArbitrary(0,8));
  ph =            Math.round(getRandomArbitrary(5,8));
  temperature =   Math.round(getRandomArbitrary(15,38));
  forecastId =    Math.round(getRandomArbitrary(500,532));
  weatherId =     Math.round(getRandomArbitrary(800,831));
  soilMoisture =  Math.round(getRandomArbitrary(10,30));
  soilT0 =        Math.round(getRandomArbitrary(18,27));
  soilT10 =       Math.round(getRandomArbitrary(15,25));
  dat.push([pluviometric, humidity, cloudness, pressure, luminosity, ph, temperature, forecastId, weatherId, soilMoisture, soilT0, soilT10])
  res.push(Math.round(getRandomArbitrary(50,100)));
}

for(i=0; i<quantidadeAmostra; i++) {
  pluviometric =  Math.round(getRandomArbitrary(80,150));
  humidity =      Math.round(getRandomArbitrary(50,100))
  cloudness =     Math.round(getRandomArbitrary(0,30));
  pressure =      Math.round(getRandomArbitrary(950,1050));
  luminosity =    Math.round(getRandomArbitrary(0,8));
  ph =            Math.round(getRandomArbitrary(5,8));
  temperature =   Math.round(getRandomArbitrary(15,38));
  forecastId =    Math.round(getRandomArbitrary(800,832));
  weatherId =     Math.round(getRandomArbitrary(500,532));
  soilMoisture =  Math.round(getRandomArbitrary(10,30));
  soilT0 =        Math.round(getRandomArbitrary(18,27));
  soilT10 =       Math.round(getRandomArbitrary(15,25));
  dat.push([pluviometric, humidity, cloudness, pressure, luminosity, ph, temperature, forecastId, weatherId, soilMoisture, soilT0, soilT10])
  res.push(Math.round(getRandomArbitrary(50,100)));
}

for(i=0; i<quantidadeAmostra; i++) {
  pluviometric =  Math.round(getRandomArbitrary(0,20));
  humidity =      Math.round(getRandomArbitrary(0,30));
  cloudness =     Math.round(getRandomArbitrary(50,100));
  pressure =      Math.round(getRandomArbitrary(1100,1800));
  luminosity =    Math.round(getRandomArbitrary(15,24));
  ph =            Math.round(getRandomArbitrary(0,8));
  temperature =   Math.round(getRandomArbitrary(35,100));
  forecastId =    Math.round(getRandomArbitrary(600,781));
  weatherId =     Math.round(getRandomArbitrary(600,781));
  soilMoisture =  Math.round(getRandomArbitrary(0,10));
  soilT0 =        Math.round(getRandomArbitrary(0,15));
  soilT10 =       Math.round(getRandomArbitrary(0,15));

  dat.push([pluviometric, humidity, cloudness, pressure,luminosity, ph, temperature, forecastId, weatherId, soilMoisture, soilT0, soilT10])
  res.push(Math.round(getRandomArbitrary(10,30)));
}

for(i=0; i<quantidadeAmostra; i++) {
  pluviometric =  Math.round(getRandomArbitrary(0,20));
  humidity =      Math.round(getRandomArbitrary(0,30));
  cloudness =     Math.round(getRandomArbitrary(50,100));
  pressure =      Math.round(getRandomArbitrary(0,900));
  luminosity =    Math.round(getRandomArbitrary(15,24));
  ph =            Math.round(getRandomArbitrary(8,14));
  temperature =   Math.round(getRandomArbitrary(35,100));
  forecastId =    Math.round(getRandomArbitrary(600,781));
  weatherId =     Math.round(getRandomArbitrary(600,781));
  soilMoisture =  Math.round(getRandomArbitrary(0,10));
  soilT0 =        Math.round(getRandomArbitrary(0,15));
  soilT10 =       Math.round(getRandomArbitrary(0,15));

  dat.push([pluviometric, humidity, cloudness, pressure,luminosity, ph, temperature, forecastId, weatherId, soilMoisture, soilT0, soilT10])
  res.push(Math.round(getRandomArbitrary(10,30)));
}

for(i=0; i<quantidadeAmostra; i++) {
  pluviometric =  Math.round(getRandomArbitrary(20,99));
  humidity =      Math.round(getRandomArbitrary(30,50));
  cloudness =     Math.round(getRandomArbitrary(30,50));
  pressure =      Math.round(getRandomArbitrary(900,110));
  luminosity =    Math.round(getRandomArbitrary(9,15));
  ph =            Math.round(getRandomArbitrary(7,9));
  temperature =   Math.round(getRandomArbitrary(27,35));
  forecastId =    Math.round(getRandomArbitrary(500,532));
  weatherId =     Math.round(getRandomArbitrary(800,831));
  soilMoisture =  Math.round(getRandomArbitrary(10,50));
  soilT0 =        Math.round(getRandomArbitrary(9,15));
  soilT10 =       Math.round(getRandomArbitrary(9,15));

  dat.push([pluviometric, humidity, cloudness, pressure,luminosity, ph, temperature, forecastId, weatherId, soilMoisture, soilT0, soilT10])
  res.push(Math.round(getRandomArbitrary(30,50)));
}



function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

var dt = new ml.DecisionTree({
  data : dat,
  result : res
});
dt.build();
dt.prune(1.0);

module.exports = dt;