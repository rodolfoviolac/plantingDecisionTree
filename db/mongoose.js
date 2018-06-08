const dotenv = require('dotenv')
const mongoose = require('mongoose');

let mongoUri = process.env.MONGO_URI
console.log(mongoUri)
mongoose.Promise = global.Promise;
mongoose.connect(mongoUri);
module.exports = {
  mongoose
}