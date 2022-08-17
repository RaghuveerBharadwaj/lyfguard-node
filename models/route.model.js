const mongoose = require('mongoose')

const RoutesSchema = new mongoose.Schema({
  latitude: {
    type: String,
    required: true
  },
  longitude: {
    type: String,
    required: true
  },
  status: {
    type: Number,
    required: true,
    default: 1
  },
  booking_id: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Routes', RoutesSchema)
