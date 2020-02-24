"use strict"

if (process.env.NODE_ENV === "development") {
    require("dotenv").config()
}
const express = require("express")
const app = express()
const routes = require("./routes")
const cors = require("cors")
const errorHandler = require("./middleware/errorHandler.js")
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())
app.use("/", routes)
app.use(errorHandler)

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))