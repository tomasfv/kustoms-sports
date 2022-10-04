const { Router } = require('express');
const {Products} = require('../db.js');

const router = Router();

router.post('/', async (req , res) => {
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
    
    if(typeof clotheType !== 'string')return res.status(200).json("clotheType should be a word")
    if(typeof brand !== 'string')return res.status(200).json("brand should be a word")
    if(typeof name !== 'string')return res.status(200).json("name should be a word")
    if(typeof gender !== 'string')return res.status(200).json("gender should be a word")
    if(typeof sport !== 'string')return res.status(200).json("sport should be a word")
    if(typeof collection !== 'string')return res.status(200).json("collection should be a word")
    if(typeof color !== 'string')return res.status(200).json("color should be a word")
    if(!Array.isArray(image))return res.status(200).json("image should be an array")
    if(typeof stock !== 'number')return res.status(200).json("stock should be a number")
    if(typeof price !== 'number')return res.status(200).json("price should be a number")
    if(typeof promotion !== 'number')return res.status(200).json("promotion should be a number")
    
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