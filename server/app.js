require('dotenv').config()
const express = require('express')
const app  = express()
const cors = require('cors')
const port = 3000
const router = require('./routes')
const errorHandler = require('./helpers/errorHandlers')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended : true }))

app.use('/', router)
app.use(errorHandler.client)
app.use(errorHandler.server)

app.listen(port, () => {
  console.log(`Running on port ${port}`)
})