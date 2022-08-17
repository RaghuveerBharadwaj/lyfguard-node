const JWT = require('jsonwebtoken')

module.exports.generateToken = (data) =>
  JWT.sign(data, process.env.JWT_TOKEN)

module.exports.tokenVerify = (token) => 
  JWT.verify(token, process.env.JWT_TOKEN)