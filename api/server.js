const express = require("express");
const db = require("./db");
const models = require("./models");
const routes = require("./routes");
const app = express();
const passport = require("passport");
const session = require("express-session");
const User = require("./models/User");
const cookieParser = require("cookie-parser");
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth2").Strategy;

app.use(express.json());
app.use(cookieParser());

app.use(
  session({
    secret: "tmdb",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      User.findOne({ where: { email }, include: "favorite" })
        .then((user) => {
          if (!user) {
            return done(null, false);
          }
          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) {
              return done(null, false);
            }
            return done(null, user);
          });
        })
        .catch(done); //invoco a done con un err
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findOne({ where: { id }, include: "favorite" })
    .then((user) => {
      done(null, user);
    })
    .catch(done);
});
passport.use(
  new GoogleStrategy(
    {
      clientID:
        "1081672857959-5cvcud1nuhjvkl59rncb9h47cnk0c5t8.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:3001/user/google/callback",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      console.log(profile);
      return done(null, profile);
    }
  )
);
app.get("/success", (req, res) => {
  res.send(`Welcome ${req.user.email}`);
});

app.use("/", routes);

db.sync({ force: false })
  .then(() => {
    app.listen(3001, () =>
      console.log("Servidor escuchando en el puerto 3001")
    );
  })
  .catch(console.error);
