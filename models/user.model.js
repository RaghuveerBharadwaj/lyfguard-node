const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  avatar: {
    type: String
  },
  phone: {
    type: Number,
    required: true
  },
  role: {
    type: String,
    required: true,
    enum: ['driver', 'user', 'admin', 'super_admin', 'hospital_admin', 'agency_admin']
  },
  address: {
    type: String,
    required: true
  },
  blood_group: {
    type: String
  },
  status: {
    type: Number,
    required: true,
    default: 1
  },
  country_code: {
    type: String
  },
  licence_number: {
    type: String
  },
  branch_id: {
    type: String
  },
  agency_id: {
    type: String
  },
})

module.exports = mongoose.model('Users', UsersSchema)