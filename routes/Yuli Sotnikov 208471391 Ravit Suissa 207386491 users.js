const express = require('express');
const router = express.Router();
const usersController = require('../controllers/Yuli Sotnikov 208471391 Ravit Suissa 207386491 usersController');

router.get('/users/:id', usersController.getUserById);

module.exports = router;
