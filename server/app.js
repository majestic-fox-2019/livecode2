require('dotenv').config()
const express = require('express')
const app = express()
const router = require('./router/router')
const port = process.env.PORT
const cors = require('cors')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use(router)


app.listen(port,()=>{
  console.log(`connected to port: ${port}`)
})