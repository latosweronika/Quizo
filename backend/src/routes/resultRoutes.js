const express = require("express");
const router = express.Router();
const resultsController = require("../controllers/resultsController");
const { auth } = require("../middleware/auth");

router.get("/", auth, resultsController.getAllResults);
router.get("/:id", auth, resultsController.getResultById);

router.post("/", auth, resultsController.createResult);

router.put("/:id", auth, resultsController.updateResult);

router.delete("/:id", auth, resultsController.deleteResult);

module.exports = router;