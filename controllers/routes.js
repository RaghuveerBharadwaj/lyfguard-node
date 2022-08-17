const RouteModel = require('../models/route.model')

const listRoutes = (req, res) => {
  const { limit = 10, skip = 0, status = 1 } = req.body;
  
  RouteModel.find({ status })
  .limit(limit).skip(skip)
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Routes Found.")
      }
      return RouteModel.find({ status }).countDocuments()
        .then(count => res.status(200).send({ list: doc, count }))
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const createRoute = (req, res) => {
  const RouteDoc = new RouteModel(req?.body)
  RouteDoc.save()
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Routes Found.")
      }
      else return res.status(200).send("Route Created")
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const viewRoute = (req, res) => {
  RouteModel.findOne({ _id: req.params.id })
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Routes Found.")
      }
      return res.status(200).send(doc)
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const editRoute = (req, res) => {
  RouteModel.findOneAndUpdate({ _id: req.params.id }, req?.body, { new: true })
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Routes Found.")
      }
      return res.status(200).send(doc)
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const deleteRoute = (req, res) => {
  RouteModel.findOneAndUpdate({ _id: req.params.id }, { status: 2 }, { new: true })
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Routes Found.")
      }
      return res.status(200).send(doc)
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

module.exports = { listRoutes, createRoute, viewRoute, editRoute, deleteRoute }