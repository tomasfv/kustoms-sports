const { Router } = require("express");
const { Users } = require("../db.js");

const router = Router();

router.post("/", async (req, res) => {
  let { email, id } = req.body;
  try {
    const finduser = await Users.findOne({
      where: { email: email },
    });
    if (finduser === null)
      return res.status(200).send("No se encuentra el usuario");
    let favoritos = [...finduser.favorites];
    let mensaje = "";
    if (!favoritos.includes(parseInt(id))) {
      if (favoritos.length > 10) favoritos.shift();
      favoritos.push(parseInt(id));
      mensaje = "Favorito agregado";
    } else {
      const index = favoritos.indexOf(parseInt(id), 0);
      if (index > -1) {
        favoritos.splice(index, 1);
        mensaje = "Favorito borrado";
      }
    }
    await finduser.update({
      favorites: favoritos,
    });
    res.status(200).send(mensaje);
  } catch (error) {
    return res.status(400).json(error.message);
  }
});

module.exports = router;
