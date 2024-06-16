const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/Yuli Sotnikov 208471391 Ravit Suissa 207386491 db');

const app = express();

// Connect to database
connectDB();

// Middleware
yuliSotnikov208471391RavitSuissa207386491App.use(bodyParser.json());

// Routes
yuliSotnikov208471391RavitSuissa207386491App.use('/', require('./routes/Yuli Sotnikov 208471391 Ravit Suissa 207386491 calories'));
yuliSotnikov208471391RavitSuissa207386491App.use('/', require('./routes/Yuli Sotnikov 208471391 Ravit Suissa 207386491 users'));
yuliSotnikov208471391RavitSuissa207386491App.use('/', require('./routes/Yuli Sotnikov 208471391 Ravit Suissa 207386491 report'));

// About endpoint
yuliSotnikov208471391RavitSuissa207386491App.get('/about', (req, res) => {
    const developers = [
        { firstname: 'Yuli', lastname: 'Sotnikov', id: 208471391, email: 'yulisotnikov123@gmail.com' },
        { firstname: 'Ravit', lastname: 'Suissa', id: 207386491, email: 'ahualravit@gmail.com' }
    ];
    res.json(developers);
});

const PORT = process.env.PORT || 5000;

yuliSotnikov208471391RavitSuissa207386491App.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
