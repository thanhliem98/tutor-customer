const express = require('express');
const app = express();
const passport = require('passport');
const userController = require('../controllers/user.controller');

app.get('/user', userController.getUserList);
app.get(
  '/user/authenticate',
  passport.authenticate('jwt', { session: false }),
  function (req, res, next) {
    res.send(req.user);
  }
);
app.post('/user/register', userController.register);
app.post('/user/login', userController.login);
app.get('/user/info', userController.getUserInfo);
app.get('/user/quantity', userController.countUsers);

app.post('/user/authen-with-social', userController.authenWithSocial);

app.post('/user/active-email', userController.activeEmail);

app.post('/user/resend-active-email', userController.resendActiveEmail);

app.post(
  '/user/send-email-reset-password',
  userController.sendMailResetPassword
);
app.post(
  '/user/verify-token-reset-password',
  userController.verifyTokenResetPassword
);
app.post('/user/reset-password', userController.resetPassword);
app.post('/user/change-password',
  passport.authenticate('jwt', { session: false }),
  userController.changePassword);
app.post('/user/update-avatar',
  passport.authenticate('jwt', { session: false }),
  userController.updateAvatar);

module.exports = app;
