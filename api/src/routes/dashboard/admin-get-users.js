require("dotenv").config();
const { Router } = require("express");
const { Users } = require("../../db.js");

const router = Router();

router.get("/", async (req, res) => {
 try {
    const user = await Users.findAll({attributes : ["name", "email", "picture"]})

    return res.status(200).json(user);

 } catch (e) {
    res.status(404).json(e.message);
 }
});


module.exports = router;
