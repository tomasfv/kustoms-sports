require("dotenv").config();
const { Router } = require("express");
const axios = require("axios");
const { Users, Carts, Products, cartproducts } = require("../db.js");
const { transporter } = require("./controlers/email-controller.js");
const express = require("express");
const Stripe = require("stripe");
const stripe = new Stripe(
  "sk_test_51Lj7u9Dukzk6GqlmiBb7Ni7KQkYghO7iUja0Sqsavauw8kQVMdOy1vTv5vN1pCduc6cRUjFzzK67KI3fnIALrvr100twGDWyWu"
);
const cors = require("cors");
const app = express();

app.use(cors({ origin: "/" }));
app.use(express.json());

const router = Router();

router.post("/", async (req, res) => {
  //recibimos email del usuario
  let { id, amount, email } = req.body;

  try {
    const finduser = await Users.findOne({
      where: { email: email },
    });
    if (!finduser) return res.status(200).send({ message: "User is not found" });

    //encontramos carrito del usuario si es que existe
    let cart = await Carts.findOne({
      where: { userId: finduser.id, open: "true" },
      include: {
        model: Users,
        model: Products,
      },
    });

    if (!cart) return res.status(200).send({ message: "User hasn't got any cart"});
    //luego verificamos el stock de los productos asociados
    let nombre = "";
    let productosComprados = [];
    cart.products.forEach((element) => {
      if (element.stock === 0) {
        nombre = element.name;
      } else {
        let precioCompra = element.price * (1 - element.promotion);
        console.log("precioCompra: ",precioCompra)
        productosComprados.push({
          nombre: element.name,
          precio: precioCompra,
        });
      }
    });
    console.log("productosComprados: ",productosComprados)
    //de no encontrar stock error
    if (nombre !== "")
      return res.status(200).send({ message: `No hay stock del producto: ${nombre}`});
    //esperamos respuesta de stripe y luego:
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Gaming Keyboard",
      payment_method: id,
      confirm: true, //confirm the payment at the same time
    });
    //restamos stock
    for (let i = 0; i < cart.products.length; i++) {
      const producto = await Products.increment(
        { stock: -1 },
        {
          where: { id: cart.products[i].id },
        }
      );
    }
    //cerrar el carrito
    await cart.update({
      open: false,
      totalamount: amount 
    });

    //console.log(payment);

    //     //mandamos correo de compra con detalles
    let texto = `<p>Gracias por tu compra realizada en <a href="https://kustoms-sports.vercel.app/">Kustoms-Sports</a> por un monto de $ ${amount} </p>`
    texto += `<p>El detalle de la misma es el siguiente: ....</p>`
    texto += `<p>Producto                   Precio           </p>`
    let begin= productosComprados.forEach(element => {
      texto += `<p>${element.nombre}              ${element.precio}</p>`
    })
    

    const transs = await transporter.sendMail({
      from: "kustomssports@gmail.com",
      to: email,
      subject: "Tu compra se realizó con éxito",
      // html: `Gracias por tu compra realizada en <a href="https://kustoms-sports.vercel.app/">Kustoms-Sports</a> por un monto de $ ${amount} `
      html: texto
    });

    console.log("transs:",transs)
    //     //fidelidad?si es posible¡¡

    return res.status(200).json({ message: "Successful Payment" });
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;
