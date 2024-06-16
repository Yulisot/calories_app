const express = require('express');

// Creating a router instance
const router = express.Router();

// Importing the calories controller
const caloriesController = require('../controllers/Yuli Sotnikov 208471391 Ravit Suissa 207386491 caloriesController');

// Define the route handler for post requests to /calories
router.post('/addcalories/', caloriesController.addCalorie);

module.exports = router;
