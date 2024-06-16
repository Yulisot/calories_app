const express = require('express');

// Middleware for parsing request bodies
const bodyParser = require('body-parser');

// Database connection function
const connectDB = require('./config/Yuli Sotnikov 208471391 Ravit Suissa 207386491 db');

const app = express();

// Connect to the MongoDB database
connectDB();

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Routes for handling different endpoints
app.use('/', require('./routes/Yuli Sotnikov 208471391 Ravit Suissa 207386491 calories'));
app.use('/', require('./routes/Yuli Sotnikov 208471391 Ravit Suissa 207386491 users'));
app.use('/', require('./routes/Yuli Sotnikov 208471391 Ravit Suissa 207386491 report'));

// About endpoint to provide information about developers
app.get('/about', (req, res) => {
    const developers = [
        { firstname: 'Yuli', lastname: 'Sotnikov', id: 208471391, email: 'yulisotnikov123@gmail.com' },
        { firstname: 'Ravit', lastname: 'Suissa', id: 207386491, email: 'ahualravit@gmail.com' }
    ];
    res.json(developers);
});

// Setting up the port for the server to listen on
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
