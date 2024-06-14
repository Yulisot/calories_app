const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/', require('./routes/calories'));
app.use('/', require('./routes/users'));
app.use('/', require('./routes/report'));

// About endpoint
app.get('/about', (req, res) => {
    const developers = [
        { firstname: 'Yuli', lastname: 'Sotnikov', id: 208471391, email: 'yulisotnikov123@gmail.com' },
        { firstname: 'Ravit', lastname: 'Suissa', id: 207386491, email: 'ahualravit@gmail.com' }
    ];
    res.json(developers);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
