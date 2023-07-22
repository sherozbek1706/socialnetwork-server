const Users = require("./Users");
const bcrypt = require("bcrypt");

const registerUsers = async ({ body }) => {
  const user = {
    ...body,
    password: bcrypt.hashSync(body.password, 10),
  };
  const newUser = await Users.create(user);

  return newUser;
};

module.exports = registerUsers;
