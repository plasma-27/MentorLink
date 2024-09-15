const express = require('express');
const router = express.Router();
const { getAvailableMentorsByDomain } = require('../controllers/mentorController');

// Define the route
router.get('/available-mentors', getAvailableMentorsByDomain);

module.exports = router;
