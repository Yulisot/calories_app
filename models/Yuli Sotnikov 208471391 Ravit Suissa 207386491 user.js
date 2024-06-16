const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id: Number,
    first_name: String,
    last_name: String,
    birthday: Date
});

module.exports = mongoose.model('User', UserSchema);
