const AgencyModel = require('../models/agency.model')

const listAgencies = (req, res) => {
  const { limit = 10, skip = 0, status = 1 } = req.body;
  
  AgencyModel.find({ status })
  .limit(limit).skip(skip)
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Agencies Found.")
      }
      return AgencyModel.find({ status }).countDocuments()
        .then(count => res.status(200).send({ list: doc, count }))
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const createAgency = (req, res) => {
  const AgencyDoc = new AgencyModel(req?.body)
  AgencyDoc.save()
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Agencies Found.")
      }
      else return res.status(200).send("Agency Created")
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const viewAgency = (req, res) => {
  AgencyModel.findOne({ _id: req.params.id })
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Agencies Found.")
      }
      return res.status(200).send(doc)
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const editAgency = (req, res) => {
  AgencyModel.findOneAndUpdate({ _id: req.params.id }, req?.body, { new: true })
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Agencies Found.")
      }
      return res.status(200).send(doc)
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const deleteAgency = (req, res) => {
  AgencyModel.findOneAndUpdate({ _id: req.params.id }, { status: 2 }, { new: true })
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Agencies Found.")
      }
      return res.status(200).send(doc)
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const listAgencyOptions = (req, res) => {
  AgencyModel.find({ status: 1 })
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Agencies Found.")
      }
      res.status(200).send(doc)
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

module.exports = { listAgencies, createAgency, viewAgency, editAgency, deleteAgency, listAgencyOptions }