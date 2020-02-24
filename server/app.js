var movies = require('./routes/index')
const express = require('express')
const cors = require("cors")
const app = express()
const port = 4000
app.use(express.urlencoded({ extended: true }))
app.use(cors)
app.use('/movies', movies)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
