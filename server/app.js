const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3000

app.use(express.urlencoded({extended:true}))
app.use(cors())

const router = require('./routers/routes')
app.use('/',router)

app.listen(PORT, () => {
  console.log('listening to port', PORT)
})
