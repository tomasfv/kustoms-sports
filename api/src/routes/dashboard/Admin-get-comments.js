const { Router } = require('express')
const { Users, Comments } = require('../../db.js')

const router = Router()

router.get('/', async (req, res) => {
  try {
    //  const user = await Users.findAll(
    //    {attributes : ["id", "name", "email", "picture", "profile", "available", "createdAt"],
    //    include: {model: Comments}})
    const comentarios = await Comments.findAll({
      attributes: ['id', 'texto', 'rank', 'available'],
      include: { model: Users },
    })
    comentarios.sort((a, b) => (a.id > b.id ? -1 : 1)) //ordeno para que vayan los últimos primero
    return res.status(200).json(comentarios)
  } catch (e) {
    res.status(404).json(e.message)
  }
})

module.exports = router
