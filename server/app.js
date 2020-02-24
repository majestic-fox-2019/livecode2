require('dotenv').config()
const error_handler = require('./middlewares/error_handler');

const express       = require('express');
var cors            = require('cors');

const app           = express();
const port          = 3000;

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const moviesRoute   = require('./routes/movies');
const rateRoute     = require('./routes/rates');

app.use('/movies', moviesRoute);
app.use('/rate', rateRoute);

app.use(error_handler);


app.listen(port, () => console.log(`App listening on port ${port}!`))