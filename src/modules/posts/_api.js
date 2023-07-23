const { post_posts } = require("./_controller");
const isLoggedIn = require("../../shared/auth/isLoggedIn");
const router = require("express").Router();

router.post("/posts", isLoggedIn, post_posts);

module.exports = router;
