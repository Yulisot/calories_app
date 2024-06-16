const User = require('../models/Yuli Sotnikov 208471391 Ravit Suissa 207386491 user');

// This function retrieves a user by their ID
// If the user is not found, it returns a 404 error.
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findOne({ id: req.params.id });
        if (!user) return res.status(404).send('User not found');

        res.json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
