const mongoose = require('mongoose')

const username = 'veer'
const password = 'veer'
const server = 'cars.svxd3be.mongodb.net'
const dbname = 'cars'

const mongoConnect = () => mongoose.connect(`mongodb+srv://${username}:${password}@${server}/${dbname}?retryWrites=true&w=majority`, { useNewUrlParser: true })

module.exports = mongoConnect
