require("dotenv").config();
const { Router } = require("express");
const axios = require("axios");
const { Users, Carts, Products, cartproducts } = require("../db.js");

const router = Router();

router.post("/", async (req, res) => {
  //recibimos email del usuario
  let { email } = req.body;
  try {
    const finduser = await Users.findOne({
      where: { email: email },
    });
    if (!finduser) return res.status(400).send("User is not found");

    //encontramos carrito del usuario si es que existe
    let cart = await Carts.findOne({
      where: { userId: finduser.id, open: "true" },
      include: {
        model: Users,
        model: Products,
      },
    });

    if (!cart) return res.status(400).send("User hasn't got any cart");
    //luego verificamos el stock de los productos asociados
    let nombre = "";
    cart.products.forEach((element) => {
      if (element.stock === 0) nombre = element.name;
    });
    //de no encontrar stock error
    if (nombre !== "")
      return res.status(400).send(`No hay stock de el producto: ${nombre}`);
    //esperamos respuesta de stripe y luego:

    //restamos stock
    for (let i = 0; i < cart.products.length; i++) {
        const producto = await Products.increment(
            { stock:- 1 },
            {
                where: { id: cart.products[i].id },
            }
            );
    }
    //cerrar el carrito
    await cart.update({
      open: false,
    });
    
    //     //mandamos correo de compra con detalles
    //     // const transs = await transporter.sendMail(

    //     //     {

    //     //         from: "kustomssports@gmail.com",
    //     //         to: email,
    //     //         subject: "REGISTRADO!",
    //     //         html: `Gracias por registrarse a KUSTOMS SPORTS!, para entrar a tu cuenta ingrese a este link <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">KUSTOMSSPORTS</a>`

    //     //     }

    //     // )
    //     //fidelidad?si es posible¡¡
    return res.status(200).send("Compra Exitosa")
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;
