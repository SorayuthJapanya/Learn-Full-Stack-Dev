const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");

const { connectDB } = require("./lib/db");
const authRoutes = require("./routes/authRoute");
const messageRoutes = require("./routes/messageRoute");
const { app, server } = require("./lib/socket"); // Import the shared server

dotenv.config();

const PORT = process.env.PORT || 5000; // Added default port

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
  connectDB();

  // Socket.io specific logging
  const { io } = require("./lib/socket");
  console.log(`Socket.io is running on port: ${PORT}`);
});
