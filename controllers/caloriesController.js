const Calorie = require('../models/calorie');

exports.addCalorie = async (req, res) => {
    try {
        const { user_id, year, month, day, description, category, amount } = req.body;
        const id = new Date().getTime(); // Generate a unique ID
        const newCalorie = new Calorie({ user_id, year, month, day, id, description, category, amount });
        await newCalorie.save();
        res.status(201).send('Calorie entry added.');
    } catch (error) {
        res.status(500).send(error.message);
    }
};
