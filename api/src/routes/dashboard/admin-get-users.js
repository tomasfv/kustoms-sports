require("dotenv").config();
const { Router } = require("express");
const { Users, Comments } = require("../../db.js");

const router = Router();

router.get("/", async (req, res) => {
 try {
    const user = await Users.findAll(
      {attributes : ["id", "name", "email", "picture", "profile", "available", "createdAt"], 
      include: {model: Comments}})
   
    return res.status(200).json(user);

 } catch (e) {
    res.status(404).json(e.message);
 }
});


module.exports = router;
