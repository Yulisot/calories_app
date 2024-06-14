const Calorie = require('../models/calorie');

exports.getReport = async (req, res) => {
    try {
        const { user_id, year, month } = req.query;
        const categories = ['breakfast', 'lunch', 'dinner', 'other'];
        const report = {};

        for (const category of categories) {
            report[category] = await Calorie.find({ user_id, year, month, category }, 'day description amount -_id');
        }

        res.json(report);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
