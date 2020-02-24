const express = require("express");
const cors = require("cors");
const PORT = 3000;
const app = express();
const route = require("./routes/index");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", route);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
