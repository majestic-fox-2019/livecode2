const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3000
const errorHandling = require('./helper/errorhandling')

app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(express.json())

const router = require('./routers/routes')
app
  .use('/',router)
  .use(errorHandling)


app.listen(PORT, () => {
  console.log('listening to port', PORT)
})
