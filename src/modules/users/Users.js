const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  first_name: {
    type: mongoose.Schema.String,
    required: true,
  },
  last_name: {
    type: mongoose.Schema.String,
    required: true,
  },
  username: {
    type: mongoose.Schema.String,
    required: true,
    unique: true,
  },
  password: {
    type: mongoose.Schema.String,
    required: true,
  },
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;
