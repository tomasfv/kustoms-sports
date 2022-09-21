const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {

sequelize.define('carts', {


id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
    
},
totalamount: {

    type: DataTypes.FLOAT,
    allowNull: false
},

open: {
  
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: false
},

})}