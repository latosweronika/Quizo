import express from "express";
import { auth } from "../middleware/auth.js";
import * as categoriesController from "../controllers/categoriesController.js";

const router = express.Router();

router.get("/", auth, categoriesController.getAllCategories);
router.get("/:id", auth, categoriesController.getCategory);
router.post("/", auth, categoriesController.createCategory);
router.put("/:id", auth, categoriesController.updateCategory);
router.delete("/:id", auth, categoriesController.deleteCategory);

export default router;