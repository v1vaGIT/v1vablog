const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    process.env.DB_NAME, // database name
    process.env.DB_USER, // user
    process.env.DB_PASSWORD, // password
    {
        dialect: "mariadb",
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        logging: false
    }
)