const Uv = require('./../models/uv')

module.exports = async (req, res) => {
  Uv.findOne().sort({createdAt:-1}).then((uv) => {
    res.send({uv});
  }, (e) => {
    console.log(e)
    res.status(400).send(e);
  });
};
