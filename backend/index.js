const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
require("./Models/db.model");
const AuthRouter = require("./Routes/AuthRouter");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

app.use("/auth", AuthRouter);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
