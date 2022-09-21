require ('dotenv').config();
const { Router } = require('express');
const axios = require('axios')
const {Users, Carts, Products} = require('../db.js');

const router =  Router();

router.post("/", async (req,res) => {
    // let { email, id } = req.body
    const data = req.body
    return res.status(200).json(data)
    // try {
    //     const finduser = await Users.findOne({
    //         where:{ email : email}
        
    //     })
    //     const product = await Products.findByPk(id)
    //     const preciototal = product.price
    //     console.log(preciototal)
    //     // if (){
            
    //     //     const cartuser = await Carts.create({
    //     //         totalamount: preciototal
    //     //     })
    //     // }

    // } catch (error) {
    //     console.log(error)
    // }


})

module.exports = router