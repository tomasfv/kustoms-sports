require("dotenv").config();
const { Router } = require("express");
const axios = require("axios");
const { Users } = require("../../db.js");

const router = Router();

router.post("/", async (req, res) => {
  let { email } = req.body;

  try {
    //me fijo si existe el usuario
    const finduser = await Users.findOne({
      where: { email: email },
    });
    if (!finduser) return res.status(400).send("User is not found");
    console.log("finduser: ", finduser)
    finduser.profile === "Client"
      ? (newProfile = "Admin")
      : (newProfile = "Client");
    console.log("newProfile: ", newProfile)

    await finduser.update({
      profile: newProfile,
    });
    return res.status(200).json(finduser);
  } catch (error) {
    return res.status(400).send(error);
  }
});

module.exports = router;
