const uploadImage = require("../../shared/upload/post-image");
const isLoggedIn = require("../../shared/auth/isLoggedIn");
const router = require("express").Router();
const {
  post_posts,
  get_posts,
  show_posts,
  get_usersPosts,
  like_usersPosts,
} = require("./_controller");

const mPostPosts = [isLoggedIn, uploadImage];
const mGetPosts = [];
const mShowPosts = [];
const mUsersPosts = [];
const mUsersLikePosts = [isLoggedIn];

router.post("/posts", mPostPosts, post_posts);
router.get("/posts", mGetPosts, get_posts);
router.get("/posts/:id", mShowPosts, show_posts);
router.get("/posts/users/:id", mUsersPosts, get_usersPosts);
router.put("/users/like/posts/:id", mUsersLikePosts, like_usersPosts);

module.exports = router;
