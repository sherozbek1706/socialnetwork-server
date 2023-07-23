const Posts = require("./Posts");

const postPosts = async ({ body, user_id }) => {
  const newPost = await Posts.create({ ...body, user_id });

  return newPost;
};

module.exports = postPosts;
