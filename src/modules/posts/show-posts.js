const { NotFoundError } = require("../../shared/errors");
const Posts = require("./Posts");

const showPosts = async ({ param }) => {
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

  const post = await Posts.findByIdAndUpdate(
    { _id: param },
    { view: existed.view + 1 },
    { new: true }
  );

  return post;
};

module.exports = showPosts;
