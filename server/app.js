require('dotenv').config()
const express = require("express")
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3000
const routes = require("./routes/index")
const errorHandler = require('./middlewares/errorhandler')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/", routes)

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`)
})