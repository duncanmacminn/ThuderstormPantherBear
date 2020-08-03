const mongoose = require('../mongoose_connect');
// Creating the User Schema
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,              // trim means if it is string, we can trim it from beginning to end, no more space
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    firstName: String,
    lastName: String,
    address: String
    // more fields defined below
});
// Creating the User collection Model
module.exports = mongoose.model('User', UserSchema);