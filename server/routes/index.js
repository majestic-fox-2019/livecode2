const express = require('express')
const index = express.Router()

index
    .use('/movies')
    .use('/rates')