const Users = require("./Users");
const bcrypt = require("bcrypt");
const { BadRequestError } = require("../../shared/errors");

const registerUsers = async ({ body, image }) => {
  const existedUsername = await Users.findOne({ username: body.username });

  if (existedUsername) {
    throw new BadRequestError("Username already exist");
  }

  const existedEmail = await Users.findOne({ email: body.email });

  if (existedEmail) {
    throw new BadRequestError("Email already exist");
  }

  if (!body.email.includes("@gmail.com")) {
    throw new BadRequestError("You must register by Google Account");
  }

  const user = {
    ...body,
    image,
    password: bcrypt.hashSync(body.password, 10),
  };
  const newUser = await Users.create(user);

  return newUser;
};

module.exports = registerUsers;
