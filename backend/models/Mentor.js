const mongoose = require('mongoose');
const User = require('./User'); // Adjust the path to where your User model is located

// Mentor Schema
const mentorSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.String, 
        ref: 'User', // Reference to User schema
        required: true
    },
    name: { 
        type: String, 
        required: true 
    },
    avatar: { 
        type: String 
    },
    domain: { 
        type: String, 
        required: true 
    },
    past_domains: [String], // Array of strings
    experience: { 
        type: Number 
    }
});

// Create and export the Mentor model
const Mentor = mongoose.model('Mentor', mentorSchema);
module.exports = Mentor;
