const mongoose = require('mongoose');
const moment = require('moment');

const UserSchema = new mongoose.Schema({
    id: Number,
    first_name: String,
    last_name: String,
    birthday: Date
});

// Virtual field for formatted birthday
UserSchema.virtual('formattedBirthday').get(function() {
    return moment(this.birthday).format('MMMM Do, YYYY'); // Using moment.js

});

// Customize the JSON output
UserSchema.set('toJSON', {
    virtuals: true,
    transform: (doc, ret) => {
        delete ret._id;
        delete ret.__v;
        ret.birthday = ret.formattedBirthday; // Replace the birthday with the formatted one
        delete ret.formattedBirthday; // Remove the virtual field from the final output
    }
});

module.exports = mongoose.model('User', UserSchema);
