const projectsController = require('../project/projects.controller.js')
const router = require('express').Router()
const security =  require('../services/security')
const passport = require('passport');

router.route('/')
    .get(projectsController.index)
    .post(security.ensureAdmin, projectsController.create);

router.route('/:projectId')
    .get(projectsController.show)
    .put(security.ensureAdmin, projectsController.update)
    .delete(security.ensureAdmin, projectsController.destroy);

module.exports = router
