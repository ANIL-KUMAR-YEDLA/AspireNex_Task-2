const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

function connect() {
  mongoose
    .connect("mongodb://localhost:27017/quizden", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log("Connected to DB"))
    .catch((err) => {
      console.error("Failed to connect to DB", err);
    });
}

const DBConnection = {
  dbconnect: () => {
    try {
      connect();
    } catch (err) {
      console.log("Error connecting database!", err);
    }
  },
};

module.exports = DBConnection;
