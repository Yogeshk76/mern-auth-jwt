const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
require('./Models/db.model');
const AuthRouter = require('./Routes/AuthRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

app.get('/', (req,res) => {
  res.send('hello world');
})

app.use('/auth', AuthRouter);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`)
});