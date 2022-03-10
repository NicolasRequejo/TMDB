const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const moviesRouter = require("./movies");
const favoriteRouter = require("./favorite");

router.use("/user", userRouter);
router.use("/movies", moviesRouter);
router.use("/favorite", favoriteRouter);

module.exports = router;
