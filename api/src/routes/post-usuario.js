const { Router } = require('express')
const { Users } = require('../db.js')
const { transporter } = require('../routes/controlers/email-controller.js')

const router = Router()

router.post('/', async (req, res) => {
  let { email, nickname, name, picture } = req.body

  if (!email) {
    return res.status(200).json('Email is missing')
  }

  try {
    const finduser = await Users.findOne({
      where: {
        email: email,
      },
    })
    if (finduser) {
      if (!finduser.available) return res.status(200).send('Banned user')
    }

    if (finduser === null) {
      const createuser = await Users.create({
        nickname,
        name,
        email,
        picture,
      })

      const transs = await transporter.sendMail({
        from: 'kustomssports@gmail.com',
        to: email,
        subject: 'REGISTRADO!',
        html: `Gracias por registrarse a KUSTOMS SPORTS!, para entrar a tu cuenta ingrese a este link <a href="https://kustoms-sports.vercel.app/">KUSTOMSSPORTS</a>`,
      })

      return res.status(200).send('User created')
    }
    return res.status(200).json('User exists >:C')
  } catch (error) {
    return res.status(400).json(error.message)
  }
})
module.exports = router
