const express = require('express');
const router = express.Router();
const usersController = require('../controllers/Yuli Sotnikov 208471391 Ravit Suissa 207386491 usersController');

// Define the route handler for GET requests to /users
router.get('/users/:id', usersController.getUserById);

module.exports = router;
