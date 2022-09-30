const { Router } = require('express');
const {Products} = require('../../db.js');
//const { ARRAY } = require('sequelize');

const router = Router();

router.post('/', async (req , res) => {
    let {
        id,
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
    promotion = (promotion/100)

    try {
        let product
        if (id!=='') {
            let productExists = Products.findByPk(id)
            if (productExists){

                product = await Products.update({
                   clotheType: clotheType,
                   brand: brand,
                   name: name,
                   gender: gender,
                   sport: sport,
                   collection: collection,
                   color: color,
                   size: size,
                   image: image,
                   stock: stock,
                   price: price,
                   promotion: promotion
               },
               {where: {id: id}}
               )
            } else{
                return res.status(200).json({message: 'El id enviado no pertenece a un producto en stock'})
            }
            return res.status(200).json({message: `Producto con id ${id} actualizado con éxito`})
        }
        else{
             product = await Products.create({
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
        }

        return res.status(200).json(product)
    } catch (error) {
        return res.status(400).json(error.message)
    }
        
    })

    module.exports = router;