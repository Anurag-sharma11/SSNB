import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import nurseRoutes from "./routes/nurseRoutes.js";
import contactRoutes from "./routes/contactRoutes.js"; // ✅ new import

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/nurses", nurseRoutes);
app.use("/api/contact", contactRoutes); // ✅ new route

// Test route
app.get("/", (req, res) => {
  res.send("Nursing Bureau API is running...");
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
