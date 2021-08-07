const express = require('express');
const router = express.Router();
const usersService = require('../services/users.service');

/**
 * @param  {user}
 */
router.post('/post', (req, res) => {
    usersService.postUser(req, res);
});

/**
 * @returns [users]
 */
router.get('/get', (req, res) => {
    usersService.getUsers(req, res);
});

/**
 * ! not working
 * @param  :id
 * TODO usersService.deleteUser()
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