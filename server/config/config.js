require('dotenv').config()
module.exports = {
  "development": {
    "username": process.env.database_user_name,
    "password": process.env.database_password,
    "database": process.env.database_name,
    "host": "127.0.0.1",
    "dialect": "postgres",
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