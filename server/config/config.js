require('dotenv').config()
module.exports = {
  "development": {
    "username": process.env.USERNAME_DEV,
    "password": process.env.PASSWORD_DEV,
    "database": process.env.DATABASE_DEV,
    "host": process.env.HOST_DEV,
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }
}