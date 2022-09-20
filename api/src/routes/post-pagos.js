require ('dotenv').config();
const { Router } = require('express');
const axios = require('axios')
const {Users} = require('../db.js');
const {transporter} = require ('../routes/controlers/email-controller.js')
const express = require("express");
const Stripe = require("stripe");
const stripe = new Stripe("sk_test_51Lj7u9Dukzk6GqlmiBb7Ni7KQkYghO7iUja0Sqsavauw8kQVMdOy1vTv5vN1pCduc6cRUjFzzK67KI3fnIALrvr100twGDWyWu");
const cors = require("cors");
const app = express();

app.use(cors({ origin: "/" }));
app.use(express.json());

const router = Router();

router.post("/", async (req, res)=>{
   // you can get more data to find in a database, and so on
   const { id, amount } = req.body;

   try {
     const payment = await stripe.paymentIntents.create({
       amount,
       currency: "USD",
       description: "Gaming Keyboard",
       payment_method: id,
       confirm: true, //confirm the payment at the same time
     });
 
     //console.log(payment);
 
     return res.status(200).json({ message: "Successful Payment" });
   } catch (error) {
     //console.log(error);
     return res.json({ message: error.raw.message });
   }
    
})
module.exports = router;