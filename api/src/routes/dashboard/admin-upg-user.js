const { Router } = require('express')
const { Users } = require('../../db.js')

const router = Router()

router.post('/', async (req, res) => {
  let { email } = req.query

  try {
    //me fijo si existe el usuario
    const finduser = await Users.findOne({
      where: { email: email },
    })
    if (!finduser) return res.status(200).send('User is not found')
    // console.log("finduser: ", finduser)
    finduser.profile === 'Client'
      ? (newProfile = 'Admin')
      : (newProfile = 'Client')
    // console.log("newProfile: ", newProfile)

    await finduser.update({
      profile: newProfile,
    })
    return res.status(200).json(finduser)
  } catch (error) {
    return res.status(400).send(error)
  }
})

module.exports = router
