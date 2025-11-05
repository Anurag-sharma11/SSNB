import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import http from "http"; // ✅ NEW
import { Server } from "socket.io"; // ✅ NEW
import connectDB from "./config/db.js";
import nurseRoutes from "./routes/nurseRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import feedbackRoutes from "./routes/feedbackRoutes.js"; // ✅ Already there

dotenv.config();
connectDB();

const app = express();

// ✅ Create server manually (needed for socket.io)
const server = http.createServer(app);

// ✅ Initialize socket.io
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // allow all during dev
    methods: ["GET", "POST"],
  },
});

// ✅ Make io globally accessible (so we can emit from routes)
app.set("io", io);

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/nurses", nurseRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/feedbacks", feedbackRoutes); // ✅ Feedback API

// Test route
app.get("/", (req, res) => {
  res.send("Nursing Bureau API is running...");
});

// ✅ Socket.io connection log
io.on("connection", (socket) => {
  console.log("🟢 Client connected:", socket.id);
  socket.on("disconnect", () => console.log("🔴 Client disconnected:", socket.id));
});

// ✅ Start server with socket support
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
