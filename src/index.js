const express = require("express");
const db = require("./db");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
db();

app.listen(5000, () => {
  console.log(`SERVER HAS BEEN STARTED ON PORT 5000.`);
});
