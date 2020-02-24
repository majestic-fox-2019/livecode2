require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const mainRouter = require('./routes')

app.use('/', mainRouter)

const errorHandler = require('./middlewares/errorHandler')

app.use(errorHandler)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
