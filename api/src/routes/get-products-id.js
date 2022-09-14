require ('dotenv').config();
const { Router } = require('express');
const axios = require('axios')
const {Products} = require('../db.js');

const router = Router();

router.get('/:id', async (req, res) => {
    let id = req.params.id
    try {
        if(id){
            const productdetail = await Products.findByPk(parseInt(id))
            if(productdetail === null) return res.status(400).json("Product id was not found")
            res.status(200).json(productdetail)
        }
    } catch (error) {
        return res.status(400).json(error.message)
    }
})

module.exports = router;