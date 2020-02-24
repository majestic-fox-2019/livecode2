'use strict'

require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const route = require('./routes')
const erroHandler = require('./middlewares/errorHandler')
const port = process.env.PORT

app.use(cors())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(route)
app.use(erroHandler)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))