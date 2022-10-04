const { DataTypes } = require('sequelize')
module.exports = (sequelize) => {
  sequelize.define('parameters', {
    carrousel: {
      type: DataTypes.STRING,
    },
  })
}
