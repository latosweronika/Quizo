import express from "express";
import { auth } from "../middleware/auth.js";
import * as materialsController from "../controllers/materialsController.js";


const router = express.Router();

router.get("/", auth, materialsController.getAllMaterials);
router.get("/:id", auth, materialsController.getMaterial);
router.post("/", auth, materialsController.createMaterial);
router.put("/:id", auth, materialsController.updateMaterial);
router.delete("/:id", auth, materialsController.deleteMaterial);

export default router;