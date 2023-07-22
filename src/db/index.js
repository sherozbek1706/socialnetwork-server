const mongoose = require("mongoose");
const config = require("../shared/config");
module.exports = () =>
  mongoose
    .connect(`mongodb://${config.DB.DB_HOST}/${config.DB.DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Server has been successfull connected Database.");
    })
    .catch((error) => {
      console.log(`Error: ${error}`);
    });
