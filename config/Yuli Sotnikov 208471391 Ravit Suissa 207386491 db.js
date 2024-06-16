const mongoose = require('mongoose');

// Function to connect to MongoDB
const connectDB = async () => {
    try {
        // Connecting to the MongoDB database
        await mongoose.connect('mongodb+srv://Calories:App@cluster0.u5clyiu.mongodb.net/calories_db', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected...');
    } catch (err) {
        // Handling connection errors
        console.error(err.message);
        process.exit(1);
    }
};

// Exporting the connectDB function
module.exports = connectDB;
