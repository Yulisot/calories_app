const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

// Define the route handler for GET requests to /report
router.get('/report', reportController.getReport);

module.exports = router;
