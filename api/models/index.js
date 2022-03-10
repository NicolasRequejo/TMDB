const User = require("./User");
const UserFavorite = require("./UserFavorite");

User.hasMany(UserFavorite, { as: "favorite" });

module.exports = { User, UserFavorite };
