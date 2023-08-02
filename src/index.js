const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const db = require("./db");
const ip = require("ip");
const config = require("./shared/config");
const app = express();

// import handleError
const handleError = require("./shared/errors/handle");

//import route
const usersRoute = require("./modules/users/_api");
const postsRoute = require("./modules/posts/_api");

app.use("/files", express.static(path.join(__dirname, "public")));
// dotenv configures
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Middleware Route
app.use(usersRoute);
app.use(postsRoute);

// Middleware Error
app.use(handleError);

// Database connection
db();

app.listen(config.PORT, () => {
  console.log(`SERVER HAS BEEN STARTED ON PORT ${config.PORT}.`);
  console.log(`SERVER HAS BEEN STARTED ON IP ${ip.address()}:${config.PORT}`);
});
