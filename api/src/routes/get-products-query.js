require ('dotenv').config();
const { Router } = require('express');
const axios = require('axios')
const {Products} = require('../db.js');
const { where } = require('sequelize');
const {Sequelize, Op} = require('sequelize')

const router = Router();

router.get('/', async (req, res) => {
    let {sport, name, collection, gender, brand} = req.query
    try {
        if(sport){
            const productsport = await Products.findAll({where : { sport: sport , available: true}})
            
            let aux = []
            productsport.forEach(element => {
                let flag = true
                for (let i = 0; i < aux.length; i++) {
                   if (element.name === aux[i].name && element.gender === aux[i].gender) flag = false
                }
                if (flag) aux.push(element)
            });
            
            aux.length ?
            res.status(200).json(aux):
            res.status(200).json("sports was not found")
        }else if(name){
            const productsname = await Products.findAll({ where : { name : {[Op.substring]: name} , available: true}})
            let aux = []
            // aux.push(productsport[0])
            productsname.forEach(element => {
                let flag = true
                for (let i = 0; i < aux.length; i++) {
                   if (element.name === aux[i].name && element.gender === aux[i].gender) flag = false
                }
                if (flag) aux.push(element)
            });
            aux.length ?
            res.status(200).json(aux):
            res.status(200).json("name was not found")
        }else if(collection){
            const productscollection = await Products.findAll({ where : { collection: collection , available: true }})
            let aux = []
            // aux.push(productsport[0])
            productscollection.forEach(element => {
                let flag = true
                for (let i = 0; i < aux.length; i++) {
                   if (element.name === aux[i].name && element.gender === aux[i].gender) flag = false
                }
                if (flag) aux.push(element)
            });
            aux.length ?
            res.status(200).json(aux):
            res.status(200).json("name was not found")
        }else if(gender){
            const productsgender = await Products.findAll({ where : { gender: gender , available: true }})
            let aux = []
            // aux.push(productsport[0])
            productsgender.forEach(element => {
                let flag = true
                for (let i = 0; i < aux.length; i++) {
                   if (element.name === aux[i].name) flag = false
                }
                if (flag) aux.push(element)
            });
            aux.length ?
            res.status(200).json(aux):
            res.status(200).json("name was not found")
        }else if(brand){
            const productsbrand = await Products.findAll({ where : { brand: brand , available: true }})
            let aux = []
            // aux.push(productsport[0])
            productsbrand.forEach(element => {
                let flag = true
                for (let i = 0; i < aux.length; i++) {
                   if (element.name === aux[i].name && element.gender === aux[i].gender) flag = false
                }
                if (flag) aux.push(element)
            });
            aux.length ?
            res.status(200).json(aux):
            res.status(200).json("name was not found")
        }
    } catch (error) {
        return res.status(400).json(error.message)
    }
})

module.exports = router;