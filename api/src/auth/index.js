var loginController = require('./login.controller.js')
let logoutController = require('./logout.controller.js')
let router = require('express').Router();

router.route('/login')
    .get(loginController.index)
    .post(loginController.login);

router.route('/logout')
    .post(logoutController.create);

module.exports = router;