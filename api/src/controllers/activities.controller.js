const express = require('express');
const router = express.Router();
const activitiesService = require('../services/activities.service');


/**
 * @param  {activity}
 * @return id
 */
router.post('/post', (req, res) => {
  activitiesService.postActivity(req, res);
});

/**
 * @return [{activities}]
*/
router.get('/get', (req, res) => {
  activitiesService.getActivities(req, res);
});

/**
 * @param :username
 * @return [activities]
*/
router.get('/deletebyname/:username', (req, res) => {
  activitiesService.deleteActivitiesByUsername(req, res);
});

/**
 * @param  :id
 * @return id
*/
router.delete('/delete/:id', (req, res) => {
  activitiesService.deleteActivity(req, res); 
});

/**
 * @param  {Activity}
 * @return id
*/
router.post('/update', (req, res) => {
  activitiesService.updateActivity(req, res);
});

module.exports = router;
