const { Server } = require("socket.io");
const http = require("http");
const express = require("express");

const app = express();
const server = http.createServer(app);

const userSocketMap = {};

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Removed trailing slash and array
    methods: ["GET", "POST"],
    credentials: true,
  },
  transports: ["websocket", "polling"], // Added transports
});

function getReceiverSocketId(userId) {
  return userSocketMap[userId];
}

io.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  const userId = socket.handshake.query.userId;
  if (userId) userSocketMap[userId] = socket.id;

  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", (reason) => {
    console.log("A user disconnected", socket.id, "Reason:", reason);

    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });

  // Add error handler
  socket.on("error", (error) => {
    console.error("Socket error:", error);
  });
});

module.exports = { io, app, server, getReceiverSocketId };
