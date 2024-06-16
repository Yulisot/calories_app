const express = require('express');
const router = express.Router();
const reportController = require('../controllers/Yuli Sotnikov 208471391 Ravit Suissa 207386491 reportController');

// Define the route handler for GET requests to /report
router.get('/report/', reportController.getReport);

module.exports = router;
