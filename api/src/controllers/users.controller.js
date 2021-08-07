const express = require('express');
const router = express.Router();
const usersService = require('../services/users.service');

/**
 * @param  {user}
 * @return id
 */
router.post('/post', (req, res) => {
    usersService.postUser(req, res);
});

/**
 * @return [users]
 */
router.get('/get', (req, res) => {
    usersService.getUsers(req, res);
});

/**
 * @param  :id
 * @return id
 */
router.delete('/delete/:id', (req, res) => {
    usersService.deleteUser(req, res); 
});

/**
 * ! not working
 * @param  {user}
 * TODO usersService.updateUser()
 */
router.post('/update', (req, res) => {
    usersService.updateUser(req, res);
});

module.exports = router;