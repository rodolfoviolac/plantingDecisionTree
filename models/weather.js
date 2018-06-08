const {mongoose} = require('./../db/mongoose');

let WeatherScheme = new mongoose.Schema({
  data:{
    type: Object
  },
  createdAt:{
    type: Date
  }
});

const Weather = mongoose.model('Weather', WeatherScheme)

module.exports = Weather