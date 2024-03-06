const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("MongoDB connection is successfully!");
});

//if got error any url and all
connection.on("error", (error) => {
  console.log(" Arif Error in MongoDB connection ", error);
});

module.exports = mongoose;
