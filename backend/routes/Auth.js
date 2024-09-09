const express = require('express');
const router = express.Router();
const Auth = require('../models/Auth'); // Adjust the path as needed

// Route to get a single login user by userId
router.get('/user', async (req, res) => {
    try {
        const { userId } = req.query; // Extract userId from query parameters

        if (!userId) {
            return res.status(400).json({ message: 'userId query parameter is required' });
        }

        console.log('Querying for userId:', userId); // Log the userId being queried

        // Find a single login user by userId
        const loginUser = await Auth.findOne({ userId });

        if (!loginUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(loginUser);
    } catch (err) {
        console.error('Error fetching login user:', err);
        res.status(500).json({ message: 'Error fetching login user', error: err });
    }
});


// Route to create a new login entry
router.post('/user', async (req, res) => {
    try {
        const { userId, password } = req.body;

        // Validate presence of required fields
        if (!userId || !password) {
            return res.status(400).json({ message: 'userId and password are required' });
        }

        // Create new Auth document
        const login = new Auth({ userId, password });
        await login.save();

        res.status(201).json({ message: 'Login created', login });
    } catch (err) {
        console.error('Error creating login:', err);
        res.status(500).json({ message: 'Error creating login', error: err });
    }
});

module.exports = router;
