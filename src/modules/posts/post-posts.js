const Posts = require("./Posts");

const postPosts = async ({ body, user_id, image }) => {
  const newPost = await Posts.create({ ...body, user_id, image });

  return newPost;
};

module.exports = postPosts;
