const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { urlencoded } = require('body-parser');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

app.use(express.static('public'));
app.use(cors({
  origin: '*',
}));
app.use(morgan('dev'));
app.use(urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({id: 1, name: 'kkiri', age: 24});
  res.status(200);
});

app.post('/user', (req, res) => {
  console.log(req.body);
})

app.listen(port, () => {
  console.log(`Run Server ${port}`);
});