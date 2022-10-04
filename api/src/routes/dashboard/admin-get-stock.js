const { Router } = require('express')
const { Products } = require('../../db.js')

const router = Router()

router.get('/', async (req, res) => {
  try {
    const productos = await Products.findAll({
      attributes: ['clotheType', 'name', 'gender', 'size', 'stock', 'image'],
    })

    const respuesta = productos.map((e) => {
      return {
        clotheType: e.clotheType,
        name: e.name,
        gender: e.gender,
        size: e.size,
        stock: e.stock,
        image: e.image[0],
      }
    })
    respuesta.sort((a, b) => (a.stock > b.stock ? 1 : -1))

    return res.status(200).json(respuesta)
  } catch (e) {
    res.status(404).json(e.message)
  }
})

module.exports = router
