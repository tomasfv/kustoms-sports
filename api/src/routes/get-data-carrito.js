const { Router } = require("express");
const { Users, Carts, Products } = require("../db.js");

const router = Router();

router.get("/", async (req, res) => {
  let { email } = req.query;
  if(email === undefined)
  return res.status(200).send("email undefined");
  try {
    const user = await Users.findOne({
      where: { email: email },
    });
    let cart = await Carts.findOne({
      where: { userId: user.id, open: "true" },
      include: {
        model: Products,
      },
    });
    return res.status(200).json(cart);
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;
