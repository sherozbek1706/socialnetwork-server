const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const db = require("./db");
const config = require("./shared/config");
const app = express();

// dotenv configures
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
db();

app.listen(config.PORT, () => {
  console.log(`SERVER HAS BEEN STARTED ON PORT ${config.PORT}.`);
});
