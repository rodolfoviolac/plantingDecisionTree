const {mongoose} = require('./../db/mongoose');

let UvScheme = new mongoose.Schema({
  data:{
    type: Object
  },
  createdAt:{
    type: Date
  }
});

const Uv = mongoose.model('Uv', UvScheme)

module.exports = Uv