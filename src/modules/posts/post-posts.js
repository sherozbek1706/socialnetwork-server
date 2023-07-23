const Posts = require("./Posts");

const postPosts = async ({ body, user_id, image }) => {
  const newPost = (await Posts.create({ ...body, user_id, image })).populate([
    {
      path: "user_id",
      select: "first_name last_name username",
    },
  ]);

  return newPost;
};

module.exports = postPosts;
