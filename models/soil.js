const {mongoose} = require('./../db/mongoose');

let UvScheme = new mongoose.Schema({
  data:{
    type: Object
  },
  createdAt:{
    type: Date
  }
});

const Soil = mongoose.model('Soil', UvScheme)

module.exports = Soil