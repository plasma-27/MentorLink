const mongoose = require('mongoose');

// User Schema (userId will be the user's email)
const userSchema = new mongoose.Schema({
    userId: { type: String, required: true, unique: true }, // userId will store the email
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true, unique: true }, // Email is unique
    gender: { type: String }
    
});

// Middleware to set userId as email before saving the user
userSchema.pre('save', async function(next) {
    const doc = this;

    // Set userId to email before saving
    if (!doc.userId) {
        doc.userId = doc.email;
    }

    next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;
