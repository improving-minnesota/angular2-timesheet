const debug = require('debug')('at:security-service');

module.exports = {
  SECRET: '$uper7op$3cr37',
  ensureAdmin
};
function ensureAdmin(req, res, next) {
  debug(`Authenticating admin for route "${req.baseUrl}"`);
  let user = req.user;

  if (user && isAdmin(user)) {
    debug(`Found authenticated admin user "${req.user.username}"`);
    next();
  } else {
    debug('User is not authenticated. express-jwt is not working.');
    res.sendStatus(401);
  }
}

function isAdmin(user) {
  return user.admin;
}
