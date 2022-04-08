const { Sequelize } = require("sequelize");

module.exports = new Sequelize("products-data", "postgres", "111", {
  dialect: "postgres",
  host: "localhost",
  port: "5432",
});
