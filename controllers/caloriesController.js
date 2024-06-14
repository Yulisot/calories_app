const User = require('../models/user');
const Calorie = require('../models/Calorie');

exports.addCalorie = async (req, res) => {
    try {
        const { user_id, year, month, day, description, category, amount } = req.body;

        // Check if the user with the given user_id exists
        const user = await User.findOne({ id: user_id });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const id = new Date().getTime(); // Generate a unique ID
        const newCalorie = new Calorie({ user_id, year, month, day, id, description, category, amount });
        await newCalorie.save();
        res.status(201).send('Calorie entry added.');
    } catch (error) {
        res.status(500).send(error.message);
    }
};
