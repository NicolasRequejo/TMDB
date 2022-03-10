const express = require("express");
const { UserFavorite, User } = require("../models");
const router = express.Router();

router.post("/", (req, res) => {
  if (!req.user) {
    return res.status(401).send("No estas logueado banana");
  }
  UserFavorite.findOne({
    where: { movieId: req.body.movieId, userId: req.user.id },
  }).then((data) => {
    if (data === null) {
      UserFavorite.create({
        userId: req.user.id,
        title: req.body.title,
        movieId: req.body.movieId,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        media_type: req.body.media_type,
      })
        .then((favorite) => {
          res.status(201).send(favorite);
        })
        .catch((error) => {
          res.status(400).send(error);
        });
    } else {
      res.status(401).send("Error");
    }
  });
});

router.delete("/", (req, res) => {
  if (!req.user) {
    return res.status(401).send("No estas logueado banana");
  }
  UserFavorite.findOne({
    where: { movieId: req.body.movieId, userId: req.user.id },
  }).then((data) => {
    if (data !== null) {
      UserFavorite.destroy({
        where: {
          userId: req.user.id,
          movieId: req.body.movieId,
        },
      })
        .then((favorite) => {
          res.status(200).send("ok");
        })
        .catch((error) => {
          res.status(400).send(error);
        });
    } else {
      res.status(401).send("Error");
    }
  });
});

module.exports = router;
