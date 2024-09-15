// const express = require('express');
// const router = express.Router();
// const User = require('../models/User'); // Adjust the path as needed

// // Route to create a new user
// router.post('/', async (req, res) => {
//     try {
//         const { name, surname, email, gender } = req.body;

//         // Create new user
//         const user = new User({ name, surname, email, gender });
//         await user.save();

//         res.status(201).json({ message: 'User created', user });
//     } catch (err) {
//         console.error('Error creating user:', err);
//         res.status(500).json({ message: 'Error creating user', error: err });
//     }
// });

// // Route to get all users
// router.get('/', async (req, res) => {
//     try {
//         const users = await User.find();
//         res.status(200).json(users);
//     } catch (err) {
//         console.error('Error fetching users:', err);
//         res.status(500).json({ message: 'Error fetching users', error: err });
//     }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const { updateProfile, getUserProfile } = require('../controllers/userController');

router.put('/profile/:id', updateProfile); // Update user profile (mentee or mentor)
router.get('/profile/:id', getUserProfile); // Get profile details

module.exports = router;
