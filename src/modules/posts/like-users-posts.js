const { NotFoundError } = require("../../shared/errors");
const Posts = require("./Posts");

const LikeUsersPosts = async ({ param, user_id }) => {
  const existed = await Posts.findOne({ _id: param });

  if (!existed) {
    throw new NotFoundError("Post Not Found");
  }

  const updatedLikePost = {
    ...existed._doc,
    like: existed.like + 1,
  };

  const updatedPost = await Posts.findByIdAndUpdate(
    { _id: param },
    updatedLikePost
  );

  return updatedPost;
};

module.exports = LikeUsersPosts;
