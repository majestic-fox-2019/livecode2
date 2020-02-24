const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const indexRouter = require('./routes/index')
const errorHandler = require('./middlewares/errorHandler')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', indexRouter)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})