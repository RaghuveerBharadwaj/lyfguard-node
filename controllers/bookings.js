const BookingModel = require('../models/booking.model')

const listBookings = (req, res) => {
  const { limit = 10, skip = 0, status = 1 } = req.body;
  
  BookingModel.find({ status })
  .limit(limit).skip(skip)
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Bookings Found.")
      }
      return BookingModel.find({ status }).countDocuments()
        .then(count => res.status(200).send({ dataList: doc, count }))
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const createBooking = (req, res) => {
  const BookingDoc = new BookingModel(req?.body)
  BookingDoc.save()
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Bookings Found.")
      }
      else return res.status(200).send("Booking Created")
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const viewBooking = (req, res) => {
  BookingModel.findOne({ _id: req.params.id })
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Bookings Found.")
      }
      return res.status(200).send(doc)
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const editBooking = (req, res) => {
  BookingModel.findOneAndUpdate({ _id: req.params.id }, req?.body, { new: true })
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Bookings Found.")
      }
      return res.status(200).send(doc)
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const deleteBooking = (req, res) => {
  BookingModel.findOneAndUpdate({ _id: req.params.id }, { status: 2 }, { new: true })
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Bookings Found.")
      }
      return res.status(200).send(doc)
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

module.exports = { listBookings, createBooking, viewBooking, editBooking, deleteBooking }