require ('dotenv').config();
const { Router } = require('express');
const {Products} = require('../../db.js');
// const { where } = require('sequelize');
// const {Sequelize, Op} = require('sequelize')

const router = Router();

router.get('/', async (req, res) => {
    let {sport, name, collection, gender, brand, clotheType} = req.query
    try {
        
    } catch (error) {
        return res.status(400).json(error.message)
    }
})

module.exports = router;