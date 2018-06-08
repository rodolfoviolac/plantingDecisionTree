const Weather = require('./../models/weather')

module.exports = async (req, res) => {
  Weather.findOne().sort({createdAt:-1}).then((weather) => {
    res.send({weather});
  }, (e) => {
    console.log(e)
    res.status(400).send(e);
  });
};
