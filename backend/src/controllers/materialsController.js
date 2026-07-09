import Material from "../models/Material.js";

export const createMaterial = async (req, res) => {
    try {
        const material = await Material.create(req.body);
        res.status(201).json(material);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const getAllMaterials = async (req, res) => {
    try {
        const materials = await Material.find()
            .populate("category")
            .populate("authorId"); 

        res.json(materials);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getMaterial = async (req, res) => {
    try {
        const material = await Material.findById(req.params.id);
        res.json(material);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updateMaterial = async (req, res) => {
    try {
        const material = await Material.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        res.json(material);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const deleteMaterial = async (req, res) => {
    try {
        const material = await Material.findByIdAndDelete(req.params.id);
        res.json(material);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
