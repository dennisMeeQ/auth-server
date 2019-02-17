const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const argon = require("../services/argon");
const userService = require("../services/user");

const options = {};

passport.use(
  new LocalStrategy(options, (username, password, done) =>
    userService
      .getUserByNameWithPassword({ username })
      .then(user => {
        if (!user) {
          return done(null, false);
        }

        return argon
          .isPasswordCorrectForUser(user, password)
          .then(isPwCorrect => {
            if (!isPwCorrect) {
              return done(null, false);
            }
            return done(null, user);
          })
          .catch(err => done(err));
      })
      .catch(err => done(err))
  )
);
