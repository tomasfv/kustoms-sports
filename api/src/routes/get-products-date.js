require ('dotenv').config();
const { Router } = require('express');
const axios = require('axios')
const {Products} = require('../db.js');

const router = Router();

router.get('/', async (req, res) => {
    try {
            const productsdate = await Products.findAll({
                limit: 3 ,
                order: [['createdAt', 'DESC' ]]
            })    
            res.status(200).json(productsdate)
        
    } catch (error) {
        return res.status(400).json(error.message)
    }
})

module.exports = router;