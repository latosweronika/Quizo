const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema({
    name: String,
    description: String,
});

module.exports = mongoose.model("Categories", categoriesSchema);