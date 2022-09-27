require("dotenv").config();
const { Router } = require("express");
const axios = require("axios");
const { Users, Carts, Products, cartproducts } = require("../db.js");
const {transporter} = require ('./controlers/email-controller.js')
const express = require("express");
const Stripe = require("stripe");
const stripe = new Stripe("sk_test_51Lj7u9Dukzk6GqlmiBb7Ni7KQkYghO7iUja0Sqsavauw8kQVMdOy1vTv5vN1pCduc6cRUjFzzK67KI3fnIALrvr100twGDWyWu");
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
    if (nombre !== "") return res.status(200).send(`No hay stock de el producto: ${nombre}`);
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
    

    //console.log(payment);

    
    //     //mandamos correo de compra con detalles
        const transs = await transporter.sendMail(
      
              {
        
                from: "kustomssports@gmail.com",
                to: email,
                subject: "Tu compra se realizó con éxito",
                html: `Gracias por tu compra realizada en <a href="https://kustoms-sports.vercel.app/">Kustoms-Sports</a> por un monto de $ ${amount} `
    
            }
    
        )
    //     //fidelidad?si es posible¡¡
    
    return res.status(200).json({ message: "Successful Payment" });
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;
