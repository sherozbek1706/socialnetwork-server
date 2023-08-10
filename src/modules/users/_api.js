const {
  register_users,
  login_users,
  forgot_passwordUsers,
  reset_passwordUsers,
  get_users,
  show_users,
} = require("./_controller");
const uploadImage = require("../../shared/upload/user-image");
const isLoggedIn = require("../../shared/auth/isLoggedIn");
const multer = require("multer");
const router = require("express").Router();

router.post("/register", uploadImage, register_users);
router.post("/login", multer().single(), login_users);
router.post("/forgot/password", multer().single(), forgot_passwordUsers);
router.get("/reset-password/:id/:token", reset_passwordUsers);
router.get("/users", isLoggedIn, get_users);
router.get("/users/:id", isLoggedIn, show_users);

module.exports = router;
