require("dotenv").config();
const { Router } = require("express");
const { Products } = require("../../db.js");

const router = Router();

router.get("/", async (req, res) => {
 try {
    const products = await Products.findAll()

    return res.status(200).json(products);

 } catch (e) {
    res.status(404).json(e.message);
 }
});


module.exports = router;
