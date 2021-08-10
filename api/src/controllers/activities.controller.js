const express = require('express');
const router = express.Router();
const activitiesService = require('../services/activities.service');


/**
 * ! not working
 * @param  {activity}
 * @return id
 */
router.post('/post', (req, res) => {
  activitiesService.postActivity(req, res);
});

/**
 * @return [activities]
*/
router.get('/get', (req, res) => {
  activitiesService.getActivities(req, res);
});

/**
 * ! not working
 * @param :username
 * @return [activities]
*/
router.get('/getbyusername/username', (req, res) => {
  //TODO activitiesService.getActivityById(req, res);
});

/**
 * ! not working
 * @param  :id
 * @return id
*/
router.delete('/delete/:id', (req, res) => {
  activitiesService.deleteActivity(req, res); 
});

/**
 * ! not working
 * @param  {Activity}
 * TODO activitiesService.updateActivity()
*/
router.post('/update', (req, res) => {
  activitiesService.updateActivity(req, res);
});

module.exports = router;
