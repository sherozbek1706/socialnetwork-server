const Posts = require("./Posts");

const postPosts = async ({ body }) => {
  const newPost = await Posts.create({ ...body });

  return newPost;
};

module.exports = postPosts;
