const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    name: String,
    password: {
        type: String,
    },
    role: {
        type: String,
        default: "USER",
    },
}, { timestamps: true })

module.exports = mongoose.model('users', usersSchema);