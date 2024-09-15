const User = require('../models/User'); // Assuming User is the model for mentors and mentees

exports.getAvailableMentorsByDomain = async (req, res) => {
  try {
    // Get the selected domain from query parameters
    const { domain } = req.query;

    // Validate the domain
    if (!domain) {
      return res.status(400).json({ msg: 'Domain is required' });
    }

    // Find mentors who are available and have expertise in the selected domain
    const mentors = await User.find({
      role: 'mentor',
      availability: true,
      'mentorDetails.expertise': domain
    }).select('name email bio mentorDetails');

    // If no mentors are found, return a message
    if (mentors.length === 0) {
      return res.status(404).json({ msg: 'No mentors found for the selected domain' });
    }

    // Return the list of available mentors
    res.status(200).json({ mentors });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Server error' });
  }
};
