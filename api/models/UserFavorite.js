const S = require("sequelize");
const db = require("../db");

class UserFavorite extends S.Model {}
UserFavorite.init(
  {
    movieId: {
      type: S.INTEGER,
      allowNull: false,
    },
    title: {
      type: S.STRING,
    },
    overview: {
      type: S.TEXT,
    },
    poster_path: {
      type: S.STRING,
    },
    media_type: {
      type: S.STRING,
    },
  },
  { sequelize: db, modelName: "userFavorite" }
);

module.exports = UserFavorite;
