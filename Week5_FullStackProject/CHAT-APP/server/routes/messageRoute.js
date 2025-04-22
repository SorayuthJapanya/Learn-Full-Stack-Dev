const express = require("express");

// controller
const {
  getUsersForSidebar,
  getMessages,
  sendMessage,
} = require("../controllers/messageController");

// middleware
const { protectRoute } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/users", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getMessages);

router.post("/send/:id", protectRoute, sendMessage);

module.exports = router;
