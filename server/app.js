const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const routes = require('./routes')
const errhandler = require('./midlewares/errHandler')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/', routes)
app.use(errhandler)


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))