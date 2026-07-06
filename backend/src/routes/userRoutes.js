const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { auth } = require("../middleware/auth");

router.get("/profile", auth, userController.getUserProfile);
router.get("/", auth, userController.getAllUsers); 
router.get("/:id", auth, userController.getUser);

router.post("/", userController.createUser);

router.put("/:id", auth, userController.updateUser);

router.delete("/:id", auth, userController.deleteUser); 