const {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
} = require("../../shared/errors");
const Users = require("./Users");
const config = require("../../shared/config");
const jwt = require("jsonwebtoken");

const ResetPasswordUsers = async ({ params }) => {
  try {
    const { id, token } = params;
    const existed = await Users.findById(id);

    if (!existed) {
      throw new NotFoundError("User not Found: 404");
    }

    let secret_key = config.JWT.SECRET + id;
    const verify = jwt.verify(token, secret_key);
    if (!verify.user) {
      throw new UnauthorizedError("Unauthorized");
    }

    
    return existed;
  } catch (error) {
    throw new BadRequestError(error.message);
  }
};

module.exports = ResetPasswordUsers;
