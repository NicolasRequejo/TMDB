const { User } = require("../models");

exports.register = function (req, res) {
  User.create(req.body)
    .then((user) => {
      res.status(201).send(user);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
};

exports.login = (req, res) => {
  res.send(req.user);
};

exports.logout = (req, res) => {
  req.logOut();
  res.clearCookie("connect.sid", { path: "/" }).status(200).send("Ok.");
};

exports.me = (req, res) => {
  if (!req.user) {
    return res.sendStatus(401);
  }

  res.send(req.user);
};
