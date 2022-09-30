require("dotenv").config();
const { Router } = require("express");
const axios = require("axios");
const { Users, Carts, Products, cartproducts } = require("../../db.js");

const router = Router();

router.get("/", async (req, res) => {
  let { email } = req.query;
  try {
    const user = await Users.findOne({
      where: { email: email },
    });
    let cart = await Carts.findAll({
      where: { userId: user.id, open: "false" },
      include: {
        model: Products,
      },
    });
    // console.log("cart close:",cart)
    const respuesta = cart.map( element => {
            return {
                total : element.totalamount,
                fecha : element.updatedAt,
                products: element.products.map(e => {
                    return{
                        nombre: e.name,
                        image: e.image[0],
                        precio: e.price,
                        promotion: e.promotion,
                        id: e.id,
                    }
                })
            }
    });
    
    // console.log(respuesta)    
    return res.status(200).json(respuesta);
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;