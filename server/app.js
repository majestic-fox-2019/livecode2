const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})