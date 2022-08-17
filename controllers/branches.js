const BranchModel = require('../models/branch.model')

const listBranches = (req, res) => {
  const { limit = 10, skip = 0, status = 1 } = req.body;

  BranchModel.find({ status })
    .limit(limit).skip(skip)
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Branches Found.")
      }
      return BranchModel.find({ status }).countDocuments()
        .then(count => res.status(200).send({ list: doc, count }))
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const createBranch = (req, res) => {
  const BranchDoc = new BranchModel(req?.body)
  BranchDoc.save()
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Branches Found.")
      }
      else return res.status(200).send("Branch Created")
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const viewBranch = (req, res) => {
  BranchModel.findOne({ _id: req.params.id })
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Branches Found.")
      }
      return res.status(200).send(doc)
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const editBranch = (req, res) => {
  BranchModel.findOneAndUpdate({ _id: req.params.id }, req?.body, { new: true })
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Branches Found.")
      }
      return res.status(200).send(doc)
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const deleteBranch = (req, res) => {
  BranchModel.findOneAndUpdate({ _id: req.params.id }, { status: 2 }, { new: true })
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Branches Found.")
      }
      return res.status(200).send(doc)
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const listBranchOptions = (req, res) => {
  BranchModel.find({ status: 1 })
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Branches Found.")
      }
      res.status(200).send(doc)
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

module.exports = { listBranches, createBranch, viewBranch, editBranch, deleteBranch, listBranchOptions }