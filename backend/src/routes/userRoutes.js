import express from "express";
import { auth } from "../middleware/auth.js";
import * as userController from "../controllers/userController.js";

const router = express.Router(); 

console.log("userRoutes loaded");
router.get("/profile", auth, userController.getUserProfile);
router.get("/", auth, userController.getAllUsers); 
router.get("/ping", (req,res)=>res.send("pong"));
router.get("/:id", auth, userController.getUser);
router.post("/", userController.createUser);
router.put("/:id", auth, userController.updateUser);
router.delete("/:id", auth, userController.deleteUser); 

export default router;