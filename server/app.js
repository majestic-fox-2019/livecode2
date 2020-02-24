require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./routes')
const port = process.env.PORT || 3000

app
    .use(cors())
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use('/', router)
    .listen(port, () => {
        console.log('server is running on port: ' + port)
    })