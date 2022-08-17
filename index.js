const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cors = require('cors')

const mongoConnect = require('./database')
const routes = require('./routes')

mongoConnect()
dotenv.config()
const app = express()
const port = process.env.PORT

app.use(cors())
app.use(bodyParser.json())
app.use(routes)

app.listen(port, () => {
  console.log(`LyfGuard Backend app listening at http://localhost:${port}`)
})
