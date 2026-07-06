const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    createdAt: Date,
    stats: [{
        completedQuizzes: Number,
        averageScore: Number
    }]
});

module.exports = mongoose.model("User", userSchema);