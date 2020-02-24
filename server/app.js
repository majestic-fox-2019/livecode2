if (process.env.NODE_ENV == 'development') {
  require('dotenv').config()
}
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const cors = require('cors')
const PORT = process.env.PORT || 3000
const routes = require('./routes')
const errorHandler = require('./middlewares/errorHandler')

app
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use('/', routes)
  .use(errorHandler)

server.listen(PORT, function() {
  console.log('app listening on port', PORT)
})
