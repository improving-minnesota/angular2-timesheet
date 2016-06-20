const projectsController = require('../project/projects.controller.js')
const router = require('express').Router()

router.route('/')
    .get(projectsController.index)
    .post(projectsController.create);

router.route('/:projectId')
    .get(projectsController.show)
    .put(projectsController.update)
    .delete(projectsController.destroy);

module.exports = router