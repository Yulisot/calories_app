const Calorie = require('../models/calorie');

exports.getReport = async (req, res) => {
    try {
        const { user_id, year, month } = req.query;
        const categories = ['breakfast', 'lunch', 'dinner', 'other'];
        const report = {};

        // Loop through each category
        for (const category of categories) {
            // Query the database to find all entries for the given category
            const entries = await Calorie.find({ user_id, year, month, category });

            // Store the entries in the report object under the current category
            report[category] = entries.map(entry => ({
                day: entry.day,
                description: entry.description,
                amount: entry.amount
            }));
        }

        // Send the report as JSON response
        res.json(report);
    } catch (error) {
        // Handle errors
        res.status(500).send(error.message);
    }
};
