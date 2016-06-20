'use strict';

const usersController = require('./users.controller')
const timesheetsController = require('./timesheets.controller')
const timeunitsController = require('./timeunits.controller')
const router = require('express').Router();

router.route('/users')
    .get(usersController.index)
    .post(usersController.create);

router.route('/users/:userId')
    .get(usersController.show)
    .put(usersController.update)
    .delete(usersController.destroy);

router.route('/users/:userId/timesheets')
    .get(timesheetsController.index)
    .post(timesheetsController.create);

router.route('/users/:userId/timesheets/:timesheetId')
    .get(timesheetsController.show)
    .put(timesheetsController.update)
    .delete(timesheetsController.destroy);

router.route('/users/:userId/timesheets/:timesheetId/timeunits')
    .get(timeunitsController.index)
    .post(timeunitsController.create);

router.route('/users/:userId/timesheets/:timesheetId/timeunits/:timeunitId')
    .get(timeunitsController.show)
    .put(timeunitsController.update)
    .delete(timeunitsController.destroy);

module.exports = router;
