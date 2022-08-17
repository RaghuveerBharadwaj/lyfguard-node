const mongoose = require('mongoose')

const AmbulancesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  vehicle_number: {
    type: String,
    required: true
  },
  type: {
    type: Number,
    required: true,
    default: 1
  },
  is_on_duty: {
    type: Number,
    required: true
  },
  status: {
    type: Number,
    required: true,
    default: 1
  },
  amenities: {
    type: Array,
    required: true
  },
  hospital_id: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Ambulances', AmbulancesSchema)
