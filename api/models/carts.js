const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {

sequelize.define('carts', {


id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
    
},
totalamount: {

    type: DataTypes.DECIMAL,
    allowNull: false
},

open: {
  
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false
},

})}