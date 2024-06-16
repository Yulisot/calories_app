const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const Calorie = require('../models/Yuli Sotnikov 208471391 Ravit Suissa 207386491 calorie');
const User = require('../models/Yuli Sotnikov 208471391 Ravit Suissa 207386491 user');

exports.addCalorie = async (req, res) => {
    try {
        const { user_id, description, category, amount } = req.body;
        let { year, month, day } = req.body;

        // Check if the user with the given user_id exists
        const user = await User.findOne({ id: user_id });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Generate a UUID for the ID field
        const id = uuidv4();

        // If any of the year, month, or day variables are empty, set them to the current date's respective values.
        if (!year || !month || !day) {
            const currentDate = new Date();
            year = year || currentDate.getFullYear();
            month = month || currentDate.getMonth() + 1;
            day = day || currentDate.getDate();
        }

        let newCalorie = await Calorie.findOne({ user_id, year, month, day, description, category });

        if (newCalorie) {
            // If the entry exists, update the amount
            newCalorie.amount += parseInt(amount);
        } else {
            // If the entry doesn't exist, create a new Calorie object
            newCalorie = new Calorie({
                user_id,
                year,
                month,
                day,
                id,
                description,
                category,
                amount
            });
        }

        // Save the new calorie entry to the database
        await newCalorie.save();
        res.status(201).send('Calorie entry added successfully');
    } catch (err) {
        // Catching any errors that occur during the promise chain
        res.status(500).send('Error adding calorie entry: ' + err.message);
    }
};

module.exports = router;
