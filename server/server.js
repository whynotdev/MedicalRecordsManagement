const express = require("express");
const app = express();

require("dotenv").config();

const dbconfig = require("./config/db");

const port = process.env.PORT || 8000;

console.log(process.env.MONGO_URL);

app.listen(port, () => console.log(`Listening on port ${port}`));
