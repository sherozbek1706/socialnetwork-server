const User = require("./Users");
const bcrypt = require("bcrypt");

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

  return "You are Logged.";
};
module.exports = loginUser;
