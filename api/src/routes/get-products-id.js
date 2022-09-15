require ('dotenv').config();
const { Router } = require('express');
const axios = require('axios')
const {Products} = require('../db.js');
const {infoDetail} = require('./controlers/controladores')

const router = Router();

router.get('/:id', async (req, res) => {
    let id = req.params.id
    try {
        // if(id){
            const result = await infoDetail(id)
            // if(productdetail === null) return res.status(400).json("Product id was not found")
            const resultado = result.infoprod[0]
            res.status(200).json(resultado)
        
    } catch (error) {
        return res.status(400).json(error.message)
    }
})

module.exports = router;