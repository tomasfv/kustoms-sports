require("dotenv").config();
const axios = require("axios");
const { Products, Users } = require("../../db.js");
const { Sequelize } = require("sequelize");


module.exports = {
  infoNavbar: async function () {
    let navbar = {};

    const productsMarcas = await Products.findAll({
      where: { available: true },
      attributes: [[Sequelize.fn("DISTINCT", Sequelize.col("brand")), "brand"]],
    });

    const marcas = productsMarcas.map((el) => el.brand);
    navbar.brand = marcas;

    const productsCollection = await Products.findAll({
      where: { available: true },
      attributes: [
        [Sequelize.fn("DISTINCT", Sequelize.col("collection")), "collection"],
      ],
    });

    const collection = productsCollection.map((el) => el.collection);
    navbar.collection = collection;

    const productsGender = await Products.findAll({
      where: { available: true },
      attributes: [
        [Sequelize.fn("DISTINCT", Sequelize.col("gender")), "gender"],
      ],
    });

    const gender = productsGender.map((el) => el.gender);
    navbar.gender = gender;

    const productsSport = await Products.findAll({
      where: { available: true },
      attributes: [[Sequelize.fn("DISTINCT", Sequelize.col("sport")), "sport"]],
    });

    const sport = productsSport.map((el) => el.sport);
    navbar.sport = sport;

    return navbar;
  },
  infoDetail: async function (id, email) {
    let detail = [];
    const productdetail = await Products.findByPk(parseInt(id));
    let infoprod = {};

    

    (infoprod.name = productdetail.name),
      (infoprod.clotheType = productdetail.clotheType),
      (infoprod.brand = productdetail.brand),
      (infoprod.gender = productdetail.gender),
      (infoprod.sport = productdetail.sport),
      (infoprod.collection = productdetail.collection),
      (infoprod.price = productdetail.price),
      (infoprod.promotion = productdetail.promotion),
      (infoprod.image = productdetail.image);

    const asociados = await Products.findAll({
      where: {
        name: productdetail.name,
        brand: productdetail.brand,
        clotheType: productdetail.clotheType,
        available: true,
      },
    });
    
    detail.push(infoprod);
    infostock = asociados.map((el) => {
      return {
        id: el.id,
        gender: el.gender,
        color: el.color,
        size: el.size,
        stock: el.stock,
      };
    });
    detail.push(infostock);
    
    
    
    const finduser = await Users.findOne({
        where: { email: email },
    });
    let visitados = [...finduser.visited];
    if (!visitados.includes(parseInt(id))) {
        if (visitados.length > 10) visitados.shift();
        visitados.push(parseInt(id));
    }
    await finduser.update({
        visited: visitados,
    });
    // let visitas = productdetail.visits +1
    // await productdetail.update({ 
    //     visits : visitas
    // })
    return detail;
},
};
