const nodemailer = require('nodemailer')
var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', // hostname
  port: 587, // port for secure SMTP
  secureConnection: false,
  tls: {
    ciphers: 'SSLv3',
  },
  auth: {
    user: 'kustomssports@gmail.com',
    pass: 'pluhikmkndosilit',
  },
})

module.exports = { transporter }
