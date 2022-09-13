require ('dotenv').config();
const { Router } = require('express');
const axios = require('axios')
const {Products} = require('../db.js');

const router = Router();

router.post('/chargeproducts', async (req , res) => {
    let {
        clotheType,
        brand,
        name,
        gender,
        sport,
        collection,
        color,
        size,
        image,
        stock,
        price,
        promotion
    } = req.body
    try {
        
        let productCreated = await Products.create({
            clotheType,
            brand,
            name,
            gender,
            sport,
            collection,
            color,
            size,
            image,
            stock,
            price,
            promotion
        })

        return res.status(200).json("Create")
    } catch (error) {
        return res.status(400).json(error.message)
    }
        
    })

    module.exports = router;