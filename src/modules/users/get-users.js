const Users = require("./Users");

const getUsers = async () => {
  const users = await Users.find();

  return users;
};

module.exports = getUsers;
