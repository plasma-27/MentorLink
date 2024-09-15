const User = require('../models/User');

// Update user profile
exports.updateProfile = async (req, res) => {
  try {
    // 1. Validate the request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // 2. Extract the userId (email) from the request parameters
    const userId = req.params.id;

    // 3. Find the user by email
    let user = await User.findOne({ email: userId });
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    // 4. Update user fields based on request body
    const { name, bio, skills, mentorDetails, availability, education } = req.body;
    
    if (name) user.name = name;
    if (bio) user.bio = bio;
    if (skills) user.skills = skills;

    // If the user is a mentor, allow updating of mentor-specific details
    if (user.role === 'mentor') {
      if (mentorDetails) {
        if (mentorDetails.expertise) user.mentorDetails.expertise = mentorDetails.expertise;
        if (mentorDetails.pastDomains) user.mentorDetails.pastDomains = mentorDetails.pastDomains;
      }
      if (availability !== undefined) user.availability = availability;
    }

    // Update education details
    if (education) {
      user.education = education; // Replace with new education data
    }

    // 5. Save the updated user to the database
    await user.save();

    // 6. Return the updated profile in the response
    res.status(200).json({
      msg: 'Profile updated successfully',
      user: {
        userId: user.email,
        name: user.name,
        email: user.email,
        role: user.role,
        bio: user.bio,
        skills: user.skills,
        mentorDetails: user.role === 'mentor' ? user.mentorDetails : undefined,
        availability: user.role === 'mentor' ? user.availability : undefined,
        education: user.education, // Include education in the response
      },
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

// Get user profile
exports.getUserProfile = async (req, res) => {
  try {
    // 1. Extract the userId (email) from the request parameters
    const userId = req.params.id;

    // 2. Find the user by email
    const user = await User.findOne({ email: userId });

    // 3. If the user is not found, return a 404 error
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    // 4. Based on the user's role, return relevant data
    if (user.role === 'mentee') {
      res.status(200).json({
        userId: user.email,
        name: user.name,
        email: user.email,
        role: user.role,
        bio: user.bio,
        skills: user.skills,
        projects: user.projects, // Projects can be populated if needed
      });
    } else if (user.role === 'mentor') {
      res.status(200).json({
        userId: user.email,
        name: user.name,
        email: user.email,
        role: user.role,
        bio: user.bio,
        skills: user.skills,
        expertise: user.mentorDetails.expertise,
        pastDomains: user.mentorDetails.pastDomains,
        availability: user.availability,
      });
    } else {
      return res.status(400).json({ msg: 'Invalid user role' });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};