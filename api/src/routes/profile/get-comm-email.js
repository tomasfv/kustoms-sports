require("dotenv").config();
const { Router } = require("express");
const axios = require("axios");
const { Users, Carts, Products, Comments, cartproducts } = require("../../db.js");

const router = Router();

router.get('/', async (req, res) => {
    let { email } = req.query;
  try {
    const user = await Users.findOne({
        where: { email: email },
        include: {
            model:Comments,
        }
      });
      const comentarios = user.comments.map(e => {
        return {
            producto: e.productname,
            genero: e.productgender,
            texto: e.texto,
            rank: e.rank,
            fecha: e.updatedAt
        }
      })
    return res.status(200).send(comentarios)
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;