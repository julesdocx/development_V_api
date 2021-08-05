const express = require('express');
const router = express.Router();
const usersService = require('../services/users.service');

router.post('/post', (req, res) => {
    usersService.postUser(req, res);
});

router.get('/get', (req, res) => {
    usersService.getUsers(req, res);
});

router.post('/delete', (req, res) => {
    usersService.deleteUser(req, res);
});

router.post('/update', (req, res) => {
    usersService.updateUser(req, res);
});

module.exports = router;