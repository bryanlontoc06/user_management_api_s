const dotenv = require('dotenv')
dotenv.config()

/* Exporting the database configuration to the application. */
module.exports = {
    HOST: process.env.MYSQL_HOST,
    USER: process.env.MYSQL_USER,
    PASSWORD: process.env.MYSQL_PASSWORD,
    DB: process.env.MYSQL_DB,
    dialect: process.env.MYSQL_DIALECT,

    /* The connection pool configuration. */
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}