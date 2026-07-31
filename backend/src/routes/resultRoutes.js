import express from "express";
import * as resultsController from "../controllers/resultsController.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, resultsController.getAllResults);
router.get("/:id", auth, resultsController.getResult);
router.post("/", auth, resultsController.createResult);
router.put("/:id", auth, resultsController.updateResult);
router.delete("/:id", auth, resultsController.deleteResult);

export default router;