const { DataTypes } = require ('sequelize');

module.exports = (sequelize) => {
    sequelize.define('user', {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name:{
           type: DataTypes.STRING,
           allowNull: false 
        },
        texto:{
           type: DataTypes.TEXT,
           allowNull: false 
        },
        date:{
           type: DataTypes.DATE,
           allowNull: false 
        },
        rank:{
           type: DataTypes.INTEGER,
           allowNull: false 
        },
        review:{
           type: DataTypes.BOOLEAN,
           allowNull: false 
        },
        available:{
           type: DataTypes.BOOLEAN,
           defaultValue: true,
           allowNull: false 
        },
    })
}