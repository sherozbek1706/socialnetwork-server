const User = require("./Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../../shared/config");

const loginUser = async ({ body }) => {
  const { username, password } = body;

  const existed = await User.findOne({ username });

  if (!existed) {
    return "User Not Found: 404";
  }

  const isCorrect = bcrypt.compareSync(password, existed.password);

  if (!isCorrect) {
    return "Password incorrect";
  }

  const token = jwt.sign({ id: existed.id }, config.JWT.SECRET, {
    expiresIn: "1h",
  });
  return token;
};
module.exports = loginUser;
