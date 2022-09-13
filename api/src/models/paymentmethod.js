const { DataTypes } = require('sequelize');
const { toDefaultValue } = require('sequelize/types/utils');
module.exports = (sequelize) => {

sequelize.define('paymentmethod', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    brand:{
        type: DataTypes.STRING,
        allowNull: false
    },
    logo:{
        type: DataTypes.STRING,
        allowNull: false
    },
    available:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
})}