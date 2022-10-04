const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('invoices', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    number: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    paymentmethods: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  })
}
