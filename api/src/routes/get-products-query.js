require ('dotenv').config();
const { Router } = require('express');
const axios = require('axios')
const {Products} = require('../db.js');
const { where } = require('sequelize');

const router = Router();

router.get('/', async (req, res) => {
    let {sport, name, collection, gender, brand} = req.query
    try {
        if(sport){
            const productsport = await Products.findAll({ where : { sport: sport }})
            productsport.length ?
            res.status(200).json(productsport):
            res.status(400).json("sports was not found")
        }else if(name){
            const productsname = await Products.findAll({ where : { name: name }})
            productsname.length ?
            res.status(200).json(productsname):
            res.status(400).json("name was not found")
        }else if(collection){
            const productscollection = await Products.findAll({ where : { collection: collection }})
            productscollection.length ?
            res.status(200).json(productscollection):
            res.status(400).json("name was not found")
        }else if(gender){
            const productsgender = await Products.findAll({ where : { gender: gender }})
            productsgender.length ?
            res.status(200).json(productsgender):
            res.status(400).json("name was not found")
        }else if(brand){
            const productsbrand = await Products.findAll({ where : { brand: brand }})
            productsbrand.length ?
            res.status(200).json(productsbrand):
            res.status(400).json("name was not found")
        }
    } catch (error) {
        return res.status(400).json(error.message)
    }
})

module.exports = router;