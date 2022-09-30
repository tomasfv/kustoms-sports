require("dotenv").config();
const { Router } = require("express");
const { Comments } = require("../../db.js");

const router = Router();

router.post("/", async (req, res) => {
  let { id } = req.query;
  
  try {
    //me fijo si existe el comentario
    const findcomment = await Comments.findByPk(id);
    // console.log("findcomment: ", findcomment)
    if (!findcomment) return res.status(200).send("Comment is not found");
    findcomment.available === true
      ? (newAvailable = false)
      : (newAvailable = true);
    // console.log("newAvailable: ", newAvailable)

    await findcomment.update({
        available: newAvailable,
    });
    return res.status(200).json(findcomment);
  } catch (error) {
    return res.status(400).send(error);
  }
});

module.exports = router;
