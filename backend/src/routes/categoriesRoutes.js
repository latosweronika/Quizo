const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categoriesController");
const { auth } = require("../middleware/auth");

router.get("/", auth, categoriesController.getAllCategories);
router.get("/:id", auth, categoriesController.getCategory);

router.post("/", auth, categoriesController.createCategory);

router.put("/:id", auth, categoriesController.updateCategory);

router.delete("/:id", auth, categoriesController.deleteCategory);

module.exports = router;