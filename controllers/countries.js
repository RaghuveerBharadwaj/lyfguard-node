const CountryModel = require('../models/country.model')

const listCountries = (req, res) => {
  const { limit = 10, skip = 0, status = 1 } = req.body;
  
  CountryModel.find({ status })
  .limit(limit).skip(skip)
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Countries Found.")
      }
      return CountryModel.find({ status }).countDocuments()
        .then(count => res.status(200).send({ list: doc, count }))
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const createCountry = (req, res) => {
  const CountryDoc = new CountryModel(req?.body)
  CountryDoc.save()
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Countries Found.")
      }
      else return res.status(200).send("Country Created")
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const viewCountry = (req, res) => {
  CountryModel.findOne({ _id: req.params.id })
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Countries Found.")
      }
      return res.status(200).send(doc)
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const editCountry = (req, res) => {
  CountryModel.findOneAndUpdate({ _id: req.params.id }, req?.body, { new: true })
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Countries Found.")
      }
      return res.status(200).send(doc)
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const deleteCountry = (req, res) => {
  CountryModel.findOneAndUpdate({ _id: req.params.id }, { status: 2 }, { new: true })
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Countries Found.")
      }
      return res.status(200).send(doc)
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const listCountryOptions = (req, res) => {
  CountryModel.find({ status: 1 })
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Countries Found.")
      }
      res.status(200).send(doc)
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

module.exports = { listCountries, createCountry, viewCountry, editCountry, deleteCountry, listCountryOptions }