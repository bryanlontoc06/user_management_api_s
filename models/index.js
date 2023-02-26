const dbConfig = require('../config/dbConfig.js');

const {Sequelize, DataTypes} = require('sequelize');

/* Creating a new instance of Sequelize. */
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)

/* Checking if the connection is successful. */
sequelize.authenticate()
.then(() => {
    console.log('connected...')
})
.catch((err) => {
    console.log('Error ' + err)
})

const db = {}

/* Assigning the Sequelize object to the db object. */
db.Sequelize = Sequelize
db.sequelize = sequelize

/* Importing the userModel.js file and passing the sequelize and DataTypes objects to it. */
db.users = require('./userModel.js')(sequelize, DataTypes)


/* Syncing the database. */
db.sequelize.sync({ force: false })
.then(() => {
    console.log('Yes, re-sync done!')
})

module.exports = db
