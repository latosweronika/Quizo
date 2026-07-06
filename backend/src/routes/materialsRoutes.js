const express = require("express");
const router = express.Router();
const materialsController = require("../controllers/materialsController");
const { auth } = require("../middleware/auth");

router.get("/", auth, materialsController.getAllMaterials);
router.get("/:id", auth, materialsController.getMaterialById);

router.post("/", auth, materialsController.createMaterial);

router.put("/:id", auth, materialsController.updateMaterial);

router.delete("/:id", auth, materialsController.deleteMaterial);

module.exports = router;