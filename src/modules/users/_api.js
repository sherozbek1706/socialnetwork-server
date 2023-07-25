const {
  register_users,
  login_users,
  forgot_passwordUsers,
} = require("./_controller");
const multer = require("multer");
const router = require("express").Router();

router.post("/register", multer().single(), register_users);
router.post("/login", multer().single(), login_users);
// router.post("/forgot/password", multer().single(), forgot_passwordUsers);

module.exports = router;
