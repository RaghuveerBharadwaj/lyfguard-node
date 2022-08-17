const mongoose = require('mongoose')

const BookingsSchema = new mongoose.Schema({
  booking_time: {
    type: String,
    required: true
  },
  accepted_time: {
    type: String,
    required: true
  },
  driver_accepted_time: {
    type: String,
    required: true
  },
  trip_start_time: {
    type: String,
    required: true
  },
  trip_end_time: {
    type: String,
    required: true
  },
  trip_end_otp: {
    type: Number,
    required: true
  },
  status: {
    type: Number,
    required: true,
    default: 1
  },
  user_id: {
    type: String,
    required: true
  },
  branch_id: {
    type: String,
    required: true
  },
  driver_id: {
    type: String,
    required: true
  },
  route_id: {
    type: String,
    required: true
  },
  ambulance_id: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Bookings', BookingsSchema)
