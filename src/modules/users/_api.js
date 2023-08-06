const {
  register_users,
  login_users,
  forgot_passwordUsers,
  get_users,
} = require("./_controller");
const isLoggedIn = require("../../shared/auth/isLoggedIn");
const multer = require("multer");
const router = require("express").Router();

router.post("/register", multer().single(), register_users);
router.post("/login", multer().single(), login_users);
// router.post("/forgot/password", multer().single(), forgot_passwordUsers);
router.get("/users", isLoggedIn, get_users);

module.exports = router;
