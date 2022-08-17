const mongoose = require('mongoose')

const ServicesSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['fire', 'police']
  },
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
    type: String,
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
  status: {
    type: Number,
    required: true,
    default: 1
  },
  country_code: {
    type: String,
    required: true
  },
})

module.exports = mongoose.model('Services', ServicesSchema)