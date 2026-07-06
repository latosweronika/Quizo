const mongoose = require("mongoose");

const resultsSchema = new mongoose.Schema({
    userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
    },
    materialType: String,
    materialId: {
            type: mongoose.Schema.Types.ObjectId,
            refPath: "materialType"
    },
    score: Number,
    maxScore: Number,
    date: Date
});

module.exports = mongoose.model("Results", resultsSchema);