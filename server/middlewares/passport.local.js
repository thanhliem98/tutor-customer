const bcrypt = require("bcrypt");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const userDb = require("../models/user");
var firebaseService = require("../utils/firebase");

module.exports = function(app) {
  app.use(passport.initialize());
  app.use(passport.session());

  const ls = new LocalStrategy(
    {
      usernameField: "token",
    },
    (username, password, done) => {
      firebaseService
        .verifyIdToken(username)
        .then(user => {
          userDb
            .findByUsername(user.uid)
            .then(rows => {
              if (rows == null) {
                return done(null, false, { message: "Invalid username" });
              }

              return done(null, rows);
            })
            .catch(err => {
              return done(err, false);
            });
        })
        .catch(err => {
          return done(err, false);
        });
    }
  );

  passport.use(ls);

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });
};
