const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, },
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true, },
    location: { type: String, default: 'Some where' },
    role: { type: String, default: 'User' },
    exclude: {type: String, default: 'No'}
}, { timestamps: true });


module.exports = mongoose.model('Users', UserSchema);