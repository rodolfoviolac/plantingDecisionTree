const request = require('request');
const Weather  = require('./../models/weather')
const Forecast  = require('./../models/forecast')
const Uv  = require('./../models/Uv')
const Soil  = require('./../models/Soil')
const moment = require('moment')
const API_URL = 'https://api.openweathermap.org/data/2.5/';
const API_TOKEN= 'fa3ac6a82e187ceb9b2a0f6db79c3eb9';
async function getWeather(){
  request(`${API_URL}weather?q=Porto Alegre&APPID=${API_TOKEN}`, function (error, res, body) {
    if(error) return
   let parsedBody = JSON.parse(body);
    let weather = new Weather({
      data: parsedBody,
      createdAt: moment()
    });
    weather.save().then((doc) => {
      console.log(doc)
    }, (e) => {
      console.log(e)
    });
  });
}

async function getWeatherForcast(){
  request(`${API_URL}forecast?q=Porto Alegre&APPID=${API_TOKEN}`, function (error, res, body) {
    if(error) return
    let parsedBody = JSON.parse(body);
    console.log()
    let forecast = new Forecast({
      data: parsedBody,
      createdAt: moment()
    });
    forecast.save().then((doc) => {
      console.log(doc)
    }, (e) => {
      console.log(e)
    });
  });
}

async function getUv(){
  request(`${API_URL}uvi?APPID=${API_TOKEN}&lat=-30.03&lon=-51.23`, function (error, res, body) {
    if(error) return
    let parsedBody = JSON.parse(body);
    console.log()
    let uv = new Uv({
      data: parsedBody,
      createdAt: moment()
    });
    uv.save().then((doc) => {
      console.log(doc)
    }, (e) => {
      console.log(e)
    });
  });
}

async function getSoil(){
  request(`http://samples.openweathermap.org/agro/1.0/soil?APPID=${API_TOKEN}&lat=-30.03&lon=-51.23`, function (error, res, body) {
    if(error) return
    let parsedBody = JSON.parse(body);
    console.log()
    let soil = new Soil({
      data: parsedBody,
      createdAt: moment()
    });
    soil.save().then((doc) => {
      console.log(doc)
    }, (e) => {
      console.log(e)
    });
  });
}

module.exports = {
  getWeatherForcast,
  getWeather,
  getUv,
  getSoil
};