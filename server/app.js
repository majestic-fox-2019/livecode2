const express = require('express')
const app = express()
const PORT = 3000
const routes = require('./routes')
const cors = require('cors')
const { errorHandler } = require('./middlewares/errorHandler')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/', routes)
app.use(errorHandler)

app.listen(PORT, function() {
    console.log('App listening to PORT', PORT)
})
