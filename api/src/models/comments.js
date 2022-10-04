const { DataTypes } = require ('sequelize');

module.exports = (sequelize) => {
    sequelize.define('comments', {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        productname:{
           type: DataTypes.STRING,
           allowNull: false 
        },
        productgender:{
         type: DataTypes.STRING,
         allowNull: false
        },
        texto:{
           type: DataTypes.TEXT,
           allowNull: false 
        },
        rank:{
           type: DataTypes.INTEGER,
           allowNull: false 
        },
        available:{
           type: DataTypes.BOOLEAN,
           defaultValue: true,
           allowNull: false 
        },
    })
}