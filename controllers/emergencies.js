const EmergencyModel = require('../models/emergency.model')

const listEmergencies = (req, res) => {
  const { limit = 10, skip = 0, status = 1 } = req.body;
  
  EmergencyModel.find({ status })
  .limit(limit).skip(skip)
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Emergencies Found.")
      }
      return EmergencyModel.find({ status }).countDocuments()
        .then(count => res.status(200).send({ list: doc, count }))
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const createEmergency = (req, res) => {
  const EmergencyDoc = new EmergencyModel(req?.body)
  EmergencyDoc.save()
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Emergencies Found.")
      }
      else return res.status(200).send("Emergency Created")
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const viewEmergency = (req, res) => {
  EmergencyModel.findOne({ _id: req.params.id })
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Emergencies Found.")
      }
      return res.status(200).send(doc)
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const editEmergency = (req, res) => {
  EmergencyModel.findOneAndUpdate({ _id: req.params.id }, req?.body, { new: true })
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Emergencies Found.")
      }
      return res.status(200).send(doc)
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const deleteEmergency = (req, res) => {
  EmergencyModel.findOneAndUpdate({ _id: req.params.id }, { status: 2 }, { new: true })
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Emergencies Found.")
      }
      return res.status(200).send(doc)
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

module.exports = { listEmergencies, createEmergency, viewEmergency, editEmergency, deleteEmergency }