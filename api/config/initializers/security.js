/*global module, require, console*/
/*jslint nomen: false*/

var express = require('express'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    db = require('../../src/services/db'),
    debug = require('debug')('at:security-initializer');

module.exports = function () {
  console.log(' * Configuring Application Security');

  function verify(username, password, done) {
    debug('Verifying credentials');
    db.findOne('users', {username: username})
      .then(function (user) {
        if(!user) {
          return done(null, false);
        }
        if (user.password === password) {
          return done(null, sanitizeUser(user));
        }

        return done(null, false);
      })
      .fail(function (err) {
        return done(err);
      });
  }

  function sanitizeUser(user) {
    let { _id, username, email, admin, firstName, lastName } = user;

    return {
      _id, username, email, admin, firstName, lastName
    };
  }

  passport.use(new LocalStrategy(verify));
};
