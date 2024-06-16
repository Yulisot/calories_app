const express = require('express');
const router = express.Router();
const caloriesController = require('../controllers/Yuli Sotnikov 208471391 Ravit Suissa 207386491 caloriesController');

router.post('/addcalories', caloriesController.addCalorie);

module.exports = router;
