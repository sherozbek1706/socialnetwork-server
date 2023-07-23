const { post_posts, get_posts, show_posts } = require("./_controller");
const uploadImage = require("../../shared/upload/post-image");
const isLoggedIn = require("../../shared/auth/isLoggedIn");
const router = require("express").Router();

const mPostPosts = [isLoggedIn, uploadImage];
const mGetPosts = [isLoggedIn];
const mShowPosts = [isLoggedIn];

router.post("/posts", mPostPosts, post_posts);
router.get("/posts", mGetPosts, get_posts);
router.get("/posts/:id", mShowPosts, show_posts);

module.exports = router;
