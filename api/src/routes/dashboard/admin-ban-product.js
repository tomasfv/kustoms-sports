require("dotenv").config();
const { Router } = require("express");
const { Products } = require("../../db.js");

const router = Router();

router.post("/", async (req, res) => {
  let { id } = req.body;

  try {
    //me fijo si existe el producto
    const findproduct = await Products.findByPk(id);
    // console.log("findproduct: ", findproduct)
    if (!findproduct) return res.status(200).send("Product is not found");
    findproduct.available === true
      ? (newAvailable = false)
      : (newAvailable = true);
    // console.log("newAvailable: ", newAvailable)

    await findproduct.update({
        available: newAvailable,
    });
    return res.status(200).json(findproduct);
  } catch (error) {
    return res.status(400).send(error);
  }
});

module.exports = router;
