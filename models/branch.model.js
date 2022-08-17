const mongoose = require('mongoose')

const BranchesSchema = new mongoose.Schema({
  is_partner_branch: {
    type: Boolean,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  website: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  address: {
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
  is_emergency: {
    type: Boolean,
    required: true
  },
  services: {
    type: String,
    required: true
  },
  type: {
    type: Number,
    required: true,
    default: 1
  },
  status: {
    type: Number,
    required: true,
    default: 1
  },
  hospital_id: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Branches', BranchesSchema)
