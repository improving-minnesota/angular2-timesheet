var security = require('../services/security');

module.exports = {
  index: function (req, res, next) {
    security.sendCurrentUser(req, res, next);
  },

  login: function (req, res, next) {
    security.login(req, res, next);
  }
};