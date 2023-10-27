const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 8080;

app.use(express.static('public'));
app.use(morgan('dev'));

app.get("/", (req, res) => {
  res.send("test");
});

app.listen(port, () => {
  console.log(`Run Server ${port}`);
});
