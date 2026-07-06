const Material = require("../models/Material");

exports.createMaterial = async (req, res) => {
    try {
        const material = await Material.create(req.body);
        res.status(201).json(material);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getAllMaterials = async (req, res) => {
    try {
        const materials = await Material.find()
            .populate("category")
            .populate("authorId"); 

        res.json(materials);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getMaterial = async (req, res) => {
    try {
        const material = await Material.findById(req.params.id);
        res.json(material);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateMaterial = async (req, res) => {
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

exports.deleteMaterial = async (req, res) => {
    try {
        const material = await Material.findByIdAndDelete(req.params.id);
        res.json(material);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
