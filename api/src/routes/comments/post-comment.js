require("dotenv").config();
const { Router } = require("express");
const axios = require("axios");
const { Users, Carts, Products, Comments, cartproducts } = require("../../db.js");
const comments = require("../../models/comments.js");

const router = Router();

router.post('/', async (req, res) => {
    let { email, name, text, rank } = req.body;
  try {
    const finduser = await Users.findOne({
        where: { email: email },
    });
    const comment = await Comments.create({
        productname: name,
        texto: text,
        rank: rank,
    })

    finduser.addComments(comment);

    return res.status(200).send("Comment created")
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;