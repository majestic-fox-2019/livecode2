require('dotenv').config()

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const cors = require('cors')
const routes = require('./routes/index')

app
    .use(cors())
    .use(express.urlencoded({extended: true}))
    .use(express.json())
    .use('/', routes)

app.listen(PORT, () => console.log(`server running on port ${PORT}`))