const JWT = require('jsonwebtoken')

module.exports.generateToken = (data) =>
  JWT.sign(data, process.env.JWT_TOKEN)

module.exports.tokenVerify = (token) => 
  JWT.verify(token, process.env.JWT_TOKEN)

module.exports.generateOTP = () => {
  const num = Math.random() * 10000
  if (num < 10) return '000' + num
  if (num < 100) return '00' + num
  if (num < 1000) return '0' + num
  else return num
}