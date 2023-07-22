const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log(`SERVER HAS BEEN STARTED ON PORT 5000.`);
});
