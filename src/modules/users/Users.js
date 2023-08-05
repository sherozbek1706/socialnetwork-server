const mongoose = require("mongoose");

const reqType = {
  type: mongoose.SchemaTypes.String,
  required: true,
};
const usersSchema = new mongoose.Schema({
  first_name: reqType,
  last_name: reqType,
  email: {
    ...reqType,
    unique: true,
  },
  isAdmin: {
    type: mongoose.SchemaTypes.Boolean,
    default: false,
  },
  view: {
    type: mongoose.SchemaTypes.Number,
    default: 0,
  },
  haveStar: {
    type: mongoose.SchemaTypes.Boolean,
    default: false,
  },
  username: {
    ...reqType,
    unique: true,
  },
  password: reqType,
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;
