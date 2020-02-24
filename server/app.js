const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

const moviesRoute = require('./routes/movies')
const ratesRoute = require('./routes/rates')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/movies', moviesRoute)
app.use('/rates', ratesRoute)

app.use((err, req, res, next) => {
  console.error(err.stack)
  if (err.statusCode) {
    res.status(err.statusCode).json({ message: err.message })
  } else if (err.errors) {
    let errorMessage = []
    err.errors.forEach(element => {
      errorMessage.push({ message: element.message })
    })
    res.status(400).json(errorMessage)
  } else {
    res.status(500).send('Something broke!')
  }
})

app.listen(port, () => console.log(`Listening on port ${port}!`))