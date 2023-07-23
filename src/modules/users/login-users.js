const User = require("./Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../../shared/config");
const { NotFoundError, ForbiddenError } = require("../../shared/errors");

const loginUser = async ({ body }) => {
  const { username, password } = body;

  const existed = await User.findOne({ username });

  if (!existed) {
    throw new NotFoundError("User Not Found: 404");
  }

  const isCorrect = bcrypt.compareSync(password, existed.password);

  if (!isCorrect) {
    throw new ForbiddenError("Password incorrect");
  }

  const token = jwt.sign({ id: existed.id }, config.JWT.SECRET, {
    expiresIn: "1h",
  });
  return token;
};
module.exports = loginUser;
