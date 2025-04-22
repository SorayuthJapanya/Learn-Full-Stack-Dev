const { generateToken } = require("../lib/utils");
const cloudinary = require("../lib/cloudinary");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

// SIGN-UP
exports.signup = async (req, res) => {
  const { fullName, email, password } = req.body;
  console.log(`full: ${fullName}, email: ${email}, pass: ${password}`);
  try {
    // Check require
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All fields are required!!" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }

    if (typeof password !== "string") {
      throw new Error("Password must be a string");
    }

    // check email
    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "Email already exists" });

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // new User
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    if (newUser) {
      // generate JWT token here
      generateToken(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ mesaage: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error in Singup controller", error);
    res.status(500).json({ message: "Internal Server Error!!" });
  }
};

// LOG-IN
exports.login = async (req, res) => {
  const { email, password } = req.body;
  console.log(`Email: ${email}, Pass: ${password}`);

  try {
    const user = await User.findOne({ email });

    if (!user)
      return res.status(400).json({ message: "Invalid Credentials!!" });

    // encode bcrypt
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid Credentials!!" });

    // genToken
    generateToken(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error in Login controller", error);
    res.status(500).json({ message: "Internal Server Error!!" });
  }
};

exports.logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully!!" });
  } catch (error) {
    console.log("Error in Logout controller", error);
    res.status(500).json({ message: "Internal Server Error!!" });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { profilePic } = req.body;
    
    const userID = req.user._id;

    if (!profilePic)
      return res.status(400).json({ message: "Profile Pic is required!!" });

    const uploadResponse = await cloudinary.uploader.upload(profilePic);
    const updatedUser = await User.findByIdAndUpdate(
      userID,
      { profilePic: uploadResponse.secure_url },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    console.log("Error in update profile controller!!", error);
    res.status(500).json({ message: "Internal Server Error!!" });
  }
};

exports.checkAuth = async (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    console.log("Error in check auth controllers", error);
    res.status(500).json({ message: "Internal Server Error!!" });
  }
};
