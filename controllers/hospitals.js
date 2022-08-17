const HospitalModel = require('../models/hospital.model')

const listHospitals = (req, res) => {
  const { limit = 10, skip = 0, status = 1 } = req.body;
  
  HospitalModel.find({ status })
  .limit(limit).skip(skip)
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Hospitals Found.")
      }
      return HospitalModel.find({ status }).countDocuments()
        .then(count => res.status(200).send({ dataList: doc, count }))
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const createHospital = (req, res) => {
  const HospitalDoc = new HospitalModel(req?.body)
  HospitalDoc.save()
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Hospitals Found.")
      }
      else return res.status(200).send("Hospital Created")
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const viewHospital = (req, res) => {
  HospitalModel.findOne({ _id: req.params.id })
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Hospitals Found.")
      }
      return res.status(200).send(doc)
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const editHospital = (req, res) => {
  HospitalModel.findOneAndUpdate({ _id: req.params.id }, req?.body, { new: true })
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Hospitals Found.")
      }
      return res.status(200).send(doc)
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const deleteHospital = (req, res) => {
  HospitalModel.findOneAndUpdate({ _id: req.params.id }, { status: 2 }, { new: true })
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Hospitals Found.")
      }
      return res.status(200).send(doc)
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const listHospitalOptions = (req, res) => {
  HospitalModel.find({ status: 1 })
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Hospitals Found.")
      }
      res.status(200).send(doc)
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

module.exports = { listHospitals, createHospital, viewHospital, editHospital, deleteHospital, listHospitalOptions }