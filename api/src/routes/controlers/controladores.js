require ('dotenv').config();
const axios = require('axios')
const {Products} = require('../../db.js');
const {Sequelize} = require('sequelize')


module.exports = {
    infoNavbar : async function (){

    let navbar = {}
    
    const productsMarcas = await Products.findAll({
        attributes: [[Sequelize.fn('DISTINCT', Sequelize.col('brand')), 'brand']]
    })  
    
    const marcas = productsMarcas.map(el => el.brand)
    navbar.brand = marcas
    
    const productsCollection = await Products.findAll({
        attributes: [[Sequelize.fn('DISTINCT', Sequelize.col('collection')), 'collection']]
    }) 
    
    const collection = productsCollection.map(el => el.collection)
    navbar.collection = collection
    
    const productsGender = await Products.findAll({
        attributes: [[Sequelize.fn('DISTINCT', Sequelize.col('gender')), 'gender']]
    })  
    
    const gender = productsGender.map(el => el.gender)
    navbar.gender = gender
    
    const productsSport = await Products.findAll({
        attributes: [[Sequelize.fn('DISTINCT', Sequelize.col('sport')), 'sport']]
    })  
    
    const sport = productsSport.map(el => el.sport)
    navbar.sport = sport
    
    return navbar;
},
infoDetail: async function (id){
    let detail = {}
    const productdetail = await Products.findByPk(parseInt(id))


    const asociados = await Products.findAll({
        where:{
            name: productdetail.name,
            brand: productdetail.brand,
            clotheType: productdetail.clotheType
        }
    })

    detail.infoprod = asociados.map(el =>{ 
        return{
                name: el.name,
                clotheType: el.clotheType,
                brand: el.brand,
                gender:el.gender,
                sport:el.sport,
                collection:el.collection,
                price:el.price,
                promotion:el.promotion,
                image:el.image,
        }
    })
    detail.infostock = asociados.map(el =>{ 
        return{
            id : el.id,
            color:el.color,
            size:el.size,
            stock:el.stock,
        }
    })

    
    
    return detail;
}
}
