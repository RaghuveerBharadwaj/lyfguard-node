const mongoose = require('mongoose')

const AgenciesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  logo: {
    type: String,
    required: true
  },
  banner: {
    type: String,
    required: true
  },
  status: {
    type: Number,
    required: true,
    default: 1
  }
})

module.exports = mongoose.model('Agencies', AgenciesSchema)
