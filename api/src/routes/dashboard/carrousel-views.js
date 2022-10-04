const { Router } = require('express')
const { Products, Users } = require('../../db.js')

const router = Router()

router.get('/', async (req, res) => {
  let { email } = req.query

  try {
    const user = await Users.findOne({
      where: { email: email },
      attributes: ['visited'],
    })
    //    let mapeada = []

    const prod = []
    //for (i = 0 ; i < user.visited.length ; i++){
    for (i = user.visited.length - 1; i > -1; i--) {
      const productos = await Products.findByPk(user.visited[i])

      prod.push(productos)
    }
    /*  const mapeadavisited = user.visited.map(async (e)=>{
            let aux = parseInt(e) 
            const productos = await Products.findByPk(aux) 
            console.log("robin", mapeada)
            return productos;  
        }) */
    return res.status(200).send(prod)
  } catch (error) {
    return res.status(400).json(error.message)
  }
})

module.exports = router
