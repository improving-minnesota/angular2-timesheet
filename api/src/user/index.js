'use strict';

const usersController = require('./users.controller')
const timesheetsController = require('./timesheets.controller')
const timeunitsController = require('./timeunits.controller')
const router = require('express').Router()

router.route('/')
    .get(usersController.index)
    .post(usersController.create)

router.route('/:userId')
    .get(usersController.show)
    .put(usersController.update)
    .delete(usersController.destroy)

router.route('/:userId/timesheets')
    .get(timesheetsController.index)
    .post(timesheetsController.create);

router.route('/:userId/timesheets/:timesheetId')
    .get(timesheetsController.show)
    .put(timesheetsController.update)
    .delete(timesheetsController.destroy)

router.route('/:userId/timesheets/:timesheetId/timeunits')
    .get(timeunitsController.index)
    .post(timeunitsController.create);

router.route('/:userId/timesheets/:timesheetId/timeunits/:timeunitId')
    .get(timeunitsController.show)
    .put(timeunitsController.update)
    .delete(timeunitsController.destroy)

module.exports = router;
