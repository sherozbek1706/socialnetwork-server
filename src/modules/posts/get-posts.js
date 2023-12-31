const Posts = require("./Posts");

const getPosts = async ({ param }) => {
  const { limit = 5, offset = 0 } = param;
  const posts = await Posts.find()
    .populate([
      {
        path: "user_id",
        select: "first_name last_name username haveStar image",
      },
      // {
      //   path: "likedUsers",
      // },
    ])
    .sort({ created_at: "desc" })
    .skip(offset)
    .limit(limit);

  return posts;
};

module.exports = getPosts;
