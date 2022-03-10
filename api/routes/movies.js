const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesCrontroller");

router.get("/", moviesController.movies);

router.get("/tv", moviesController.serie);

module.exports = router;
