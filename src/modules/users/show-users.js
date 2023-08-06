const { NotFoundError } = require("../../shared/errors");
const Users = require("./Users");

const showUsers = async ({ params }) => {
  if (params.id.length != 24) {
    throw new NotFoundError("User Not Found: 404");
  }

  const existed = await Users.findOne({ _id: params.id });

  if (!existed) {
    throw new NotFoundError("User Not Found: 404");
  }

  return existed;
};

module.exports = showUsers;
