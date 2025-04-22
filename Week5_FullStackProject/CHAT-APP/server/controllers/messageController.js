const Message = require("../models/messageModel");
const User = require("../models/userModel");
const cloudinary = require("../lib/cloudinary");

exports.getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error in getUsersForSidebar: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const myId = req.user._id;

    const message = await Message.find({
      $or: [
        { senderID: myId, receiverID: userToChatId },
        { senderId: userToChatId, receiverID: myId },
      ],
    });

    res.status(200).json(message);
  } catch (error) {
    console.log("Error in get message controller", error);
    res.status(500).json({ message: "Internal Server Error!!" });
  }
};

exports.sendMessage = async (req, res) => {
  try {
    const { text, image } = req.body;
    const { id: receiverID } = req.params;
    const senderID = req.user._id;

    let imageUrl;
    if (image) {
      // Upload base64 image to cloudinary
      const uploadResponse = await cloudinary.uploader.upload(image);
      imageUrl = uploadResponse.secure_url;
    }

    const newMessage = new Message({
      senderID,
      receiverID,
      text,
      image: imageUrl,
    });

    await newMessage.save();

    // todo: realtime functionality goes here => socket.io
    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage controller", error);
    res.status(500).json({ message: "Internal Server Error!!" });
  }
};
