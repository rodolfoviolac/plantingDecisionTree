const Uv = require('./../models/Uv')
const Soil = require('./../models/Soil')
const Weather = require('./../models/weather')
const Forecast = require('./../models/forecast')

module.exports = async (req, res) => {
  let uv = await Uv.findOne().sort({createdAt:-1}).exec();
  let weatherAPI = await Weather.findOne().sort({createdAt:-1}).exec();
  let forecastAPI = await Forecast.findOne().sort({createdAt:-1}).exec();
  let soil = await Soil.findOne().sort({createdAt:-1}).exec();

  let weather = weatherAPI.data.weather[0].main
  let pluviometric = 0
  if(weatherAPI.data.rain)  pluviometric = weatherAPI.data.rain["3h"]

  res.send({
    pluviometric: pluviometric,
    humidity: weatherAPI.data.main.humidity,
    cloudness: weatherAPI.data.clouds.all,
    pressure: weatherAPI.data.main.pressure,
    luminosity: uv.data.value,
    ph: Math.round(Math.random() * (9.5 - 6.5) + 6.5),
    temperature: Math.round(weatherAPI.data.main.temp - 273),
    forecast: forecastAPI.data.list[forecastAPI.data.list.length-1].weather[0].main,
    weather: weatherAPI.data.weather[0].main,
    weatherId: weatherAPI.data.weather[0].id,
    forecastId: forecastAPI.data.list[forecastAPI.data.list.length-1].weather[0].id,
    soilMoisture: soil.data.moisture,
    soilT0: Math.round(soil.data.t0 - 273),
    soilT10: Math.round(soil.data.t10 - 273)
  })
};
