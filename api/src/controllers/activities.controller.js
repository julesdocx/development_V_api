const express = require('express');
const router = express.Router();
const activitiesService = require('../services/activities.service');

router.post('/postActivity', (req, res) => {
  activitiesService.postActivity(req, res);
});

module.exports = router;