const ServiceModel = require('../models/service.model')

const listServices = (req, res) => {
  const { limit = 10, skip = 0, status = 1, type = 'fire' } = req.body;
  
  ServiceModel.find({ status, type })
  .limit(limit).skip(skip)
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Services Found.")
      }
      return ServiceModel.find({ status, type }).countDocuments()
        .then(count => res.status(200).send({ list: doc, count }))
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const createService = (req, res) => {
  const ServiceDoc = new ServiceModel(req?.body)
  ServiceDoc.save()
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Services Found.")
      }
      else return res.status(200).send("Service Created")
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const viewService = (req, res) => {
  ServiceModel.findOne({ _id: req.params.id })
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Services Found.")
      }
      return res.status(200).send(doc)
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const editService = (req, res) => {
  ServiceModel.findOneAndUpdate({ _id: req.params.id }, req?.body, { new: true })
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Services Found.")
      }
      return res.status(200).send(doc)
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const deleteService = (req, res) => {
  ServiceModel.findOneAndUpdate({ _id: req.params.id }, { status: 2 }, { new: true })
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Services Found.")
      }
      return res.status(200).send(doc)
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

module.exports = { listServices, createService, viewService, editService, deleteService }