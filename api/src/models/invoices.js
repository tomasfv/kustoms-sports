const { DataTypes } = require ('sequelize');

module.exports = (sequelize) => {
    sequelize.define('invoices', {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        number:{
           type: DataTypes.UUIDV4,
           defaultValue: DataTypes.UUIDV4,
           allowNull: false 
        },
        paymentmethod:{
           type: DataTypes.STRING,
           allowNull: false 
        },
        date:{
           type: DataTypes.DATE,
           allowNull: false 
        },
        amount:{
           type: DataTypes.DECIMAL,
           allowNull: false 
        } 
    })
}