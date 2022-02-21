const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const Product = sequelize.define('product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    price: { type: DataTypes.INTEGER },
})

module.exports = { Product }
