

const express = require('express');
const router = express.Router();
const { updateProfile, getUserProfile } = require('../controllers/userController');

router.put('/profile/:id', updateProfile); // Update user profile (mentee or mentor)
router.get('/profile/:id', getUserProfile); // Get profile details

module.exports = router;
