const Posts = require("./Posts");

const getPosts = async () => {
  const posts = await Posts.find().populate([
    {
      path: "user_id",
      select: "first_name last_name username",
    },
  ]);

  return posts;
};

module.exports = getPosts;
