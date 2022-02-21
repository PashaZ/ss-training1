const { Sequelize } = require('sequelize')

module.exports = new Sequelize(
    'products-data',
    'postgres',
    '111',
    {
        dialect: 'postgres',
        host: 'localhost',
        port: '5432',
    }
    // process.env.DB_NAME,
    // process.env.DB_USER ,
    // process.env.DB_PASSWORD ,
    // {
    //     dialect:'postgres',
    //     host: process.env.DB_HOST,
    //     port:process.env.DB_PORT
    // }
)

// PORT= 3000 /?
// DB_Name=products-data
// DB_USER=postgres
// DB_PASSWORD=111
// DB_HOST=localhost
// DB_PORT=5432
