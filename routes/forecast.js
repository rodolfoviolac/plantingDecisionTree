const Forecast = require('./../models/forecast')

module.exports = async (req, res) => {
  Forecast.findOne().sort({createdAt:-1}).then((forecast) => {
    res.send({forecast});
  }, (e) => {
    console.log(e)
    res.status(400).send(e);
  });
};
