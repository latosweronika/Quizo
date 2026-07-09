import Categories from "../models/Categories.js";

export const createCategory = async (req, res) => {
    try {
        const category = await Categories.create(req.body);
        res.status(201).json(category);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const getAllCategories = async (req, res) => {
    try {
        const categories = await Categories.find(); 
        res.json(categories);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getCategory = async (req, res) => {
    try {
        const category = await Categories.findById(req.params.id);   
        res.json(category);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updateCategory = async (req, res) => {
    try {
        const category = await Categories.findByIdAndUpdate(    
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        res.json(category);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const deleteCategory = async (req, res) => {
    try {
        const category = await Categories.findByIdAndDelete(req.params.id); 
        res.json(category);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
