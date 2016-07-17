var security = require('../services/security.js');

module.exports = {
  index: function (req, res) {
    req.logout();
    res.send(204);
  }
};
