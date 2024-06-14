const User = require('../models/user');

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findOne({ id: req.params.id });
        if (!user) return res.status(404).send('User not found');
        res.json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
