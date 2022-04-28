"use strict";

var router = require("express").Router();

var _require = require("../controllers"),
    userController = _require.userController;

var _require2 = require("../middleware"),
    auth = _require2.auth;

var _require3 = require("../middleware"),
    authAdmin = _require3.authAdmin;

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/refresh_token", userController.getAccessToken);
router.post("/forgot", userController.forgotPassword);
router.post("/reset", auth, userController.resetPassword);
router.get("/logout", userController.logout); // Social Login

router.post("/google_login", userController.googleLogin);
router.post("/facebook_login", userController.facebookLogin);
module.exports = router;