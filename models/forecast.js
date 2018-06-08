const {mongoose} = require('./../db/mongoose');

let ForecastScheme = new mongoose.Schema({
  data:{
    type: Object
  },
  createdAt:{
    type: Date
  }
});

const Forecast = mongoose.model('Forecast', ForecastScheme)

module.exports = Forecast