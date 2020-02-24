const express = require('express');
const app = express()
const PORT = 3000
const cors = require('cors');


app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});