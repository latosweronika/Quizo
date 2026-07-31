import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";

import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import materialsRoutes from "./routes/materialsRoutes.js";
import categoriesRoutes from "./routes/categoriesRoutes.js";    
import resultRoutes from "./routes/resultRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is running");
});
app.get("/abc", (req, res) => {
    res.send("abc");
});
app.use("/auth", authRoutes);
app.use("/materials", materialsRoutes);
app.use("/categories", categoriesRoutes);
app.use("/result", resultRoutes);
app.use("/user", userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});