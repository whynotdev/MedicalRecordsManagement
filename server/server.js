const express = require("express");
const app = express();

const cors = require("cors");

require("dotenv").config();

const dbconfig = require("./config/db");

app.use(express.json());
app.use(cors());

const userRoute = require("./routes/userRoute");

app.use("/api/user", userRoute);

const port = process.env.PORT || 8000;

// console.log(process.env.MONGO_URL);

app.listen(port, () => console.log(`Listening on port ${port}`));
