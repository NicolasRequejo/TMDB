const S = require("sequelize");
const db = new S("nrmovies", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = db;
