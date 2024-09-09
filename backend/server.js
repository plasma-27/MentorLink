const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const User = require('./models/User');
const Auth = require('./models/Auth')
const userRoutes = require('./routes/User');
const authRoutes = require('./routes/Auth');


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mentorlink', {
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

app.use(bodyParser.json());

app.use('/auth', authRoutes);


// Use the user routes
app.use('/users', userRoutes);   



app.get('/',async (req,res)=>{
    res.send("'I'm Live");
})
// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
