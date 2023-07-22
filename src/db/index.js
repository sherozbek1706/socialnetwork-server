const mongoose = require("mongoose");

module.exports = () =>
  mongoose
    .connect("mongodb://127.0.0.1/social-network", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Server has been successfull connected Database.");
    })
    .catch((error) => {
      console.log(`Error: ${error}`);
    });
