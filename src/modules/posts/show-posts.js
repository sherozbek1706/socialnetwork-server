const { NotFoundError } = require("../../shared/errors");
const Posts = require("./Posts");

const showPosts = async ({ param }) => {
  console.log(param.length);
  if (param.length !== 24) {
    throw new NotFoundError("Post Not Found 404");
  }

  const existed = await Posts.findOne({ _id: param }).populate([
    {
      path: "user_id",
      select: "first_name last_name username",
    },
  ]);

  if (!existed) {
    throw new NotFoundError("Post Not Found 404");
  }

  return existed;
};

module.exports = showPosts;
