const express = require('express');
const router = express.Router();
const caloriesController = require('../controllers/caloriesController');

router.post('/addcalories', caloriesController.addCalorie);

module.exports = router;
