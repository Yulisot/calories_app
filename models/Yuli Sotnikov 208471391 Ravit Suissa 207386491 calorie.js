const mongoose = require('mongoose');

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
