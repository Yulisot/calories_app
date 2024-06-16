const Calorie = require('../models/Yuli Sotnikov 208471391 Ravit Suissa 207386491 calorie');
const User = require('../models/Yuli Sotnikov 208471391 Ravit Suissa 207386491 user');

// Controller function to get a report of calorie entries for a specific user, year, and month
exports.getReport = async (req, res) => {
    try {
        const { user_id, year, month } = req.query;
        const categories = ['breakfast', 'lunch', 'dinner', 'other'];
        const report = {};

        // Validate user_id, year, and month
        const errors = [];
        if (isNaN(parseInt(month)) || parseInt(month) < 1 || parseInt(month) > 12) {
            errors.push("Invalid month. Month should be between 1 and 12");
        }
        if (isNaN(parseInt(year)) || parseInt(year) < 0) {
            errors.push("Invalid year. Year should be a non-negative number");
        }
        if (!user_id || user_id.trim() === '') {
            errors.push("Invalid user_id. User_id cannot be empty");
        }
        if (errors.length > 0) {
            return res.status(400).json({ errors });
        }

        // Check if the user exists
        const userExists = await User.exists({ id: user_id });
        if (!userExists) {
            return res.status(404).send('User not found');
        }

        // Fetch the report from the Calorie collection
        for (const category of categories) {
            const entries = await Calorie.find({ user_id, year, month, category });
            report[category] = entries.map(entry => ({
                day: entry.day,
                description: entry.description,
                amount: entry.amount
            }));
        }

        // Send the report as JSON response
        res.json(report);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
