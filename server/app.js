const express = require('express')
const app  = express()
const cors = require('cors')
const port = 3000
const router = require('./routes')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended : true }))

app.use('/', router)

app.listen(port, () => {
  console.log(`Running on port ${port}`)
})