const AmbulanceModel = require('../models/ambulance.model')

const listAmbulances = (req, res) => {
  const { limit = 10, skip = 0, status = 1 } = req.body;
  
  AmbulanceModel.find({ status })
  .limit(limit).skip(skip)
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Ambulances Found.")
      }
      return AmbulanceModel.find({ status }).countDocuments()
        .then(count => res.status(200).send({ dataList: doc, count }))
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const createAmbulance = (req, res) => {
  const AmbulanceDoc = new AmbulanceModel(req?.body)
  AmbulanceDoc.save()
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Ambulances Found.")
      }
      else return res.status(200).send("Ambulance Created")
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const viewAmbulance = (req, res) => {
  AmbulanceModel.findOne({ _id: req.params.id })
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Ambulances Found.")
      }
      return res.status(200).send(doc)
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const editAmbulance = (req, res) => {
  AmbulanceModel.findOneAndUpdate({ _id: req.params.id }, req?.body, { new: true })
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Ambulances Found.")
      }
      return res.status(200).send(doc)
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const deleteAmbulance = (req, res) => {
  AmbulanceModel.findOneAndUpdate({ _id: req.params.id }, { status: 2 }, { new: true })
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Ambulances Found.")
      }
      return res.status(200).send(doc)
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

module.exports = { listAmbulances, createAmbulance, viewAmbulance, editAmbulance, deleteAmbulance }