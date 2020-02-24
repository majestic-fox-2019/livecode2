require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./routes')
const port = process.env.PORT || 3000
const errorHandler = require('./middlewares/errorHandler')

app
    .use(cors())
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .use('/', router)
    .use(errorHandler)
    .listen(port, () => {
        console.log('server is running on port: ' + port)
    })