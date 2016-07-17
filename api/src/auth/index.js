var loginController = require('./login.controller.js')
let logoutController = require('./logout.controller.js')
let router = require('express').Router();
let passport = require('passport');

router
  .route('/login')
  .get(loginController.index)
  .post(passport.authenticate('local', { session: false }), loginController.login);

router
  .route('/logout')
  .get(logoutController.index);

module.exports = router;
