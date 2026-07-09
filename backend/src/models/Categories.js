import mongoose from "mongoose";

const categoriesSchema = new mongoose.Schema({
    name: String,
    description: String,
});

const Category = mongoose.model("Category", categoriesSchema);
export default Category;