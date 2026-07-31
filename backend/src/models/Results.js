import mongoose from "mongoose";

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

const Results = mongoose.model("Results", resultsSchema);
export default Results;