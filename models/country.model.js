const mongoose = require('mongoose')

const CountriesSchema = new mongoose.Schema({
  code: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  status: {
    type: Number,
    required: true,
    default: 1
  }
})

module.exports = mongoose.model('Countries', CountriesSchema)