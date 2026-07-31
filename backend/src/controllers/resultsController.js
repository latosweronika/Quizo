import Results from "../models/Results.js";

export const createResult = async (req, res) => {
    try {
        const result = await Results.create(req.body);
        res.status(201).json(result);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const getAllResults = async (req, res) => {
    try {
        const results = await Results.find({ userId: req.userId });
        res.json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getResult = async (req, res) => {
    try {
        const result = await Results.findById(req.params.id);   
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updateResult = async (req, res) => {
    try {
        const result = await Results.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const deleteResult = async (req, res) => {
    try {
        const result = await Results.findByIdAndDelete(req.params.id);
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
