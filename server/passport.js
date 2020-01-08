const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const UserModel = require('./app/models/user.model');
const jwtSecretConfig = require('./config/jwt-secret.config');

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    function (email, password, cb) {
      return UserModel.findOne({ email })
        .then(user => {
          if (!user) {
            return cb(null, false, { message: 'Incorrect email or password.' });
          } else if (!user.validatePassword(password)) {
            return cb(null, false, { message: 'Incorrect email or password.' });
          }
          return cb(null, user, { message: 'Logged In Successfully' });
        })
        .catch(err => cb(err));
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtSecretConfig.jwtSecret
    },
    function (jwtPayload, cb) {
      var email = jwtPayload.email;
      return UserModel.findOne({ email })
        .then(user => {
          return cb(null, user);
        })
        .catch(err => {
          return cb(err);
        });
    }
  )
);
