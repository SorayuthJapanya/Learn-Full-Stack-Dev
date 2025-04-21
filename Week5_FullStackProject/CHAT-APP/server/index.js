const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const { connectDB } = require("./lib/db");
const authRoutes = require("./routes/authRoute");
const messageRoutes = require("./routes/messageRoute");

dotenv.config();
const app = express();

const PORT = process.env.PORT;

// Middleware
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
  connectDB();
});
