const { Router } = require('express')
const { Users } = require('../db.js')
const { infoDetail } = require('./controlers/controladores')

const router = Router()

router.get('/:id', async (req, res) => {
  let id = req.params.id
  let { email } = req.query
  try {
    const result = await infoDetail(id)
    const finduser = await Users.findOne({
      where: { email: email },
    })
    if (finduser === null) return res.status(200).json(result)
    let visitados = [...finduser.visited]
    if (!visitados.includes(parseInt(id))) {
      if (visitados.length > 10) visitados.shift()
      visitados.push(parseInt(id))
    }
    await finduser.update({
      visited: visitados,
    })
    res.status(200).json(result)
  } catch (error) {
    return res.status(400).json(error.message)
  }
})

module.exports = router
