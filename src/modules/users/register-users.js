const Users = require("./Users");


const registerUsers = async ({ body }) => {
  console.log(body);
  const newUser = await Users.create({ ...body });

  return newUser;
};

module.exports = registerUsers;
