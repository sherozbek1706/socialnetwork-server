const { NotFoundError } = require("../../shared/errors");
const Posts = require("./Posts");

const getUsersPosts = async ({ param }) => {
  if (param.length !== 24) {
    throw new NotFoundError("There aren't posts.");
  }

  const existed = await Posts.find({ user_id: param }).populate([
    {
      path: "user_id",
      select: "first_name last_name username",
    },
  ]);

  if (!existed) {
    throw new NotFoundError("There aren't posts.");
  }

  return existed;
};

module.exports = getUsersPosts;
