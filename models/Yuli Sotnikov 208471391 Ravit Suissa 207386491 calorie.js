const mongoose = require('mongoose');

// This schema defines the structure for storing calorie data using Mongoose in a MongoDB database.
const CalorieSchema = new mongoose.Schema({
    user_id: Number,
    year: Number,
    month: Number,
    day: Number,
    id: Number,
    description: String,
    category: String,
    amount: Number
});

module.exports = mongoose.model('Calorie', CalorieSchema);
