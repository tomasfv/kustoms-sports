const { Router } = require("express");
const {Carts, Products, Users} = require("../../db.js");
require("dotenv").config();
const router = Router();

router.get("/", async (req, res) => {
  try {
    let financial = await Carts.findAll({
      where :{ open: "false"},
      include :[{
        model: Products ,
        model: Users 
      }],
    });

  const finduserid = financial.map((e)  => {

    return{
  userId: e.userId,
  totalamount: e.totalamount,
  updatedAt: e.updatedAt,

}})
let respuesta = []
for (let i = 0 ; i < finduserid.length; i++) {
  
  let usuario = await Users.findByPk(finduserid[i].userId) 
 
  let objeto = {
    email : usuario.email,
    picture: usuario.picture,
    totalamount: finduserid[i].totalamount,
    updatedAt: finduserid[i].updatedAt
  } 
  respuesta.push(objeto)

}

    return res.status(200).json(respuesta);
  } catch (error) {
    return res.status(400).json(error)
  }
});


module.exports = router;