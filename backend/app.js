const express = require("express");
const cors = require("cors");
const app = express();
const config = require("./utils/config");
const taskListRouter = require("./controllers/task");
const mongoose = require("mongoose");
require("dotenv").config();

console.log("Connecting to MongoDB...");

mongoose.set("strictQuery", false);
mongoose
  .connect(config.URI)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

app.use(cors());
app.use(express.json());
app.use(express.static("dist"));
app.use("/api/tasklist/", taskListRouter);

module.exports = app;
