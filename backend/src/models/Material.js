import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    correct: {
        type: Boolean,
        required: true
    }
    },
    {_id: false});

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    answers: [answerSchema]
    },
    {_id: false});

const flashcardSchema = new mongoose.Schema({
    front: {
        type: String,
        required: true
    },
    back: {
        type: String,
        required: true
    }
}, {_id: false});

const materialSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    type: {
        type: String,
        enum: ["quiz", "flashcards"],
        required: true,
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },

    questions : [questionSchema],

    flashcards: [flashcardSchema],

    authorId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
    },
    {timestamps: true});

const Material = mongoose.model("Material", materialSchema);
export default Material;