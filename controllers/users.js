const bcrypt = require('bcrypt')
const UserModel = require('../models/user.model')
const { generateToken, generateOTP } = require('../utils/jwt')

const listUsers = (req, res) => {
  const { limit = 10, skip = 0, role = 'user', status = 1 } = req.body;

  UserModel.find({ role, status })
    .limit(limit).skip(skip)
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Users Found.")
      }
      return UserModel.find({ role, status }).countDocuments()
        .then(count => res.status(200).send({ dataList: doc, count }))
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const createUser = (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, 10)
  const UserDoc = new UserModel(req?.body)
  UserDoc.save()
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Users Found.")
      }
      else return res.status(200).send("User Created")
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const viewUser = (req, res) => {
  UserModel.findOne({ _id: req.params.id })
    .then(doc => {
      if (!doc) {
        return res.status(422).send("No Users Found.")
      }
      return res.status(200).send(doc)
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const editUser = (req, res) => {
  UserModel.findOneAndUpdate({ _id: req.params.id }, req?.body, { new: true })
    .then(doc => {
      if (!doc) {
        return res.status(422).send("No Users Found.")
      }
      return res.status(200).send(doc)
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const deleteUser = (req, res) => {
  UserModel.findOneAndUpdate({ _id: req.params.id }, { status: 1 }, { new: true })
    .then(doc => {
      if (!doc) {
        return res.status(422).send("No Users Found.")
      }
      return res.status(200).send(doc)
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

const login = async (req, res) => {
  UserModel.findOne({ phone: req.body.phone })
    .then(async (doc) => {
      if (!doc) {
        return res.status(422).send("No Users Found.")
      }
      const validatePass = await bcrypt.compare(req.body.password, doc.password);
      if (validatePass) {
        const data = { ...doc._doc }
        delete data.password
        delete data.__v
        data['token'] = generateToken(data)
        res.cookie('lyfguard', data['token'])
        return res.status(200).send(data)
      }
      else {
        return res.status(403).send("Email and Password do not match.")
      }
    })
    .catch(err => {
      console.log(err)
      return res.status(422).send(err)
    })
}

const loginByOTP = async (req, res) => {
  UserModel.findOne({ phone: req.body.phone })
    .then(async (doc) => {
      if (!doc) {
        return res.status(422).send("No Users Found.")
      }
      if (req?.body?.otp !== '0000') {
        return res.status(422).send("Invalid OTP")
      }
      const data = { ...doc._doc }
      delete data.password
      delete data.__v
      data['token'] = generateToken(data)
      res.cookie('lyfguard', data['token'])
      return res.status(200).send(data)
    })
    .catch(err => {
      console.log(err)
      return res.status(422).send(err)
    })
}

const sendOTP = async (req, res) => {
  UserModel.findOne({ phone: req.body.phone })
    .then(async (doc) => {
      if (!doc) {
        return res.status(422).send("No Users Found.")
      }
      return res.status(200).send({ otp: '0000' })
    })
    .catch(err => {
      console.log(err)
      return res.status(422).send(err)
    })
}

const listUserOptions = (req, res) => {
  const { role = 'user', status = 1 } = req.body;
  UserModel.find({ role, status })
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(422).send("No Users Found.")
      }
      res.status(200).send(doc)
    })
    .catch(err => {
      return res.status(422).send(err)
    })
}

module.exports = { listUsers, createUser, viewUser, editUser, deleteUser, login, loginByOTP, listUserOptions, sendOTP }