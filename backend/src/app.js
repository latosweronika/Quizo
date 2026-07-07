import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

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
app.use("/auth", require("./routes/authRoutes.js"));
app.use("/materials", require("./routes/materialsRoutes.js"));
app.use("/categories", require("./routes/categoriesRoutes.js"));
app.use("/results", require("./routes/resultsRoutes.js"));
app.use("/users", require("./routes/userRoutes.js"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});