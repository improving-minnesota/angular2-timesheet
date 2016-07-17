var security = require('../services/security');
    debug = require('debug')('at:login.controller'),
    jwt = require('jwt-simple');

module.exports = {
  index: function (req, res, next) {
    security.sendCurrentUser(req, res, next);
  },

  login: function (req, res, next) {
    debug('login was successful');

    let token = jwt.encode(req.user, security.SECRET);
    res.json(token);
  }
};
