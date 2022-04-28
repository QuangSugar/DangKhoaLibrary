"use strict";

var router = require("express").Router();

var _require = require("../controllers"),
    bookController = _require.bookController;

var _require2 = require("../middleware"),
    auth = _require2.auth;

var _require3 = require("../middleware"),
    authAdmin = _require3.authAdmin; // -------------------Manage Category------------------------


router.post("/create-book", auth, authAdmin, bookController.createBook);
router.get("/get-all-book", bookController.getAllBook);
router.get("/get-latest-book", bookController.getLatestBook);
router.get("/get-book/:id", bookController.getBook);
router.patch("/update-book/:id", auth, authAdmin, bookController.updateBook);
router["delete"]("/delete-book/:id", auth, authAdmin, bookController.deleteBook);
module.exports = router;