const { Router } = require('express')
const { Products } = require('../db.js')

const router = Router()

router.get('/', async (req, res) => {
  try {
    const productsdate = await Products.findAll({
      where: { available: true },
      order: [['createdAt', 'DESC']],
    })
    let aux = []
    // aux.push(productsport[0])
    productsdate.forEach((element) => {
      let flag = true
      for (let i = 0; i < aux.length; i++) {
        if (element.name === aux[i].name) flag = false
      }
      if (flag) aux.push(element)
    })
    aux.splice(10, aux.length + 1)
    res.status(200).json(aux)
  } catch (error) {
    return res.status(400).json(error.message)
  }
})

module.exports = router
