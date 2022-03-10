const express = require("express");
const { UserFavorite, User } = require("../models");
const userController = require("../controllers/userController");
const router = express.Router();
const passport = require("passport");

router.get("/", (req, res) => {
  User.findAll()
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});

router.post("/register", userController.register);

router.post("/login", passport.authenticate("local"), userController.login);

router.post("/logout", userController.logout);

router.get("/me", userController.me);

module.exports = router;
