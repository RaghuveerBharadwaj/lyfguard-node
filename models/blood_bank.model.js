const mongoose = require('mongoose')

const BloodBanksSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone_number: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  operation_start_time: {
    type: String,
    required: true
  },
  operation_end_time: {
    type: String,
    required: true
  },
  operation_days: {
    type: Number,
    required: true
  },
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  country_code: {
    type: String,
    required: true
  },
  status: {
    type: Number,
    required: true,
    default: 1
  }
})

module.exports = mongoose.model('BloodBanks', BloodBanksSchema)