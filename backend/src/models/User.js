import mongoose from "mongoose";

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
const User = mongoose.model("User", userSchema);
export default User;