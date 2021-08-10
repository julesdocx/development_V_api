const express = require('express');
const activitiesController = require('../controllers/activities.controller');
const usersController = require('../controllers/users.controller');

let router = express.Router();

router.use('/users', usersController);

router.use('/activities', activitiesController);

module.exports = router;
