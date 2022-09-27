require("dotenv").config();
const { Router } = require("express");
const { Users, Carts, Products, cartproducts } = require("../../db.js");

const router = Router();

router.get("/", async (req, res) => {
  try {
    let cart = await Carts.findAll({
      where: { open: "false" },
      include: {
        model: Products,
      },
    });
    const mapeo = cart.map( element => {
            return {
                products: element.products.map(e => {
                    return{
                        productoId: e.id,
                    }
                })
            }
    });
    let objeto = {}

    for (let i = 0; i < mapeo.length; i++) {
        for (let j = 0; j < mapeo[i].products.length; j++) {
            if (objeto[mapeo[i].products[j].productoId]) {
                objeto[mapeo[i].products[j].productoId]= objeto[mapeo[i].products[j].productoId]+1
            } else{
                objeto[mapeo[i].products[j].productoId]=1
            }
        }
    }

    const claves = Object.keys(objeto)
    let nuevoArreglo= []

    for (let i = 0; i < claves.length; i++) {
        let datos= await Products.findByPk(parseInt(claves[i]))
        nuevoArreglo.push({
            nombre : datos.name,
            gender : datos.gender,
            size : datos.size,
            stock : datos.stock,
            sold: objeto[claves[i]]
        })
       }

    return res.status(200).json(nuevoArreglo);
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;