const Soil = require('./../models/soil')

module.exports = async (req, res) => {
  Soil.findOne().sort({createdAt:-1}).then((soil) => {
    res.send({soil});
  }, (e) => {
    console.log(e)
    res.status(400).send(e);
  });
};
