const BloodBankModel = require('../models/blood_bank.model')

const listBloodBanks = (req, res) => {
  const { limit = 10, skip = 0, status = 1 } = req.body;

  BloodBankModel.find({ status })
  .limit(limit).skip(skip)
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Blood Banks Found.")
      }
      return BloodBankModel.find({ status }).countDocuments()
        .then(count => res.status(200).send({ dataList: doc, count }))
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const createBloodBank = (req, res) => {
  const BloodBankDoc = new BloodBankModel(req?.body)
  BloodBankDoc.save()
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Blood Banks Found.")
      }
      else return res.status(200).send("BloodBank Created")
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const viewBloodBank = (req, res) => {
  BloodBankModel.findOne({ _id: req.params.id })
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Blood Banks Found.")
      }
      return res.status(200).send(doc)
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const editBloodBank = (req, res) => {
  BloodBankModel.findOneAndUpdate({ _id: req.params.id }, req?.body, { new: true })
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Blood Banks Found.")
      }
      return res.status(200).send(doc)
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const deleteBloodBank = (req, res) => {
  BloodBankModel.findOneAndUpdate({ _id: req.params.id }, { status: 2 }, { new: true })
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Blood Banks Found.")
      }
      return res.status(200).send(doc)
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

module.exports = { listBloodBanks, createBloodBank, viewBloodBank, editBloodBank, deleteBloodBank }