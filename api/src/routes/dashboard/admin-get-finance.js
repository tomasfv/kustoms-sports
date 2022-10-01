const { Router } = require("express");
const {Carts, Products} = require("../../db.js");
require("dotenv").config();

const router = Router();

router.get("/", async (req, res) => {
  try {
    let financial = await Carts.findAll({
      where :{ open: "false"},
      include :{
        model: Products
      },
    });
    
  const finduserid = financial.map(e => { return{

  userId: e.userId,
  totalamount: e.totalamount,
  updatedAt: e.updatedAt,
  products : e.products.map(t => { return { promotion: t.promotion }})

}})


    return res.status(200).json(finduserid);
  } catch (error) {
    return res.status(400).json(error)
  }
});


module.exports = router;