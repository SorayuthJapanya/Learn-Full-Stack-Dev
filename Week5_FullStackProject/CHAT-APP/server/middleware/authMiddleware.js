const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.protectRoute = async (req, res, next) => {
  try {
    // console.log("Cookies from client:", req.cookies);

    const token = req.cookies.jwt;

    if (!token)
      return res
        .status(401)
        .json({ message: "Unauthorized - No Token Provided!!" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded)
      return res
        .status(401)
        .json({ message: "Unauthorized - Token Provided!!" });

    const user = await User.findById(decoded.userID).select("-password");

    if (!user) return res.status(404).json({ message: "User not found!" });

    req.user = user;

    next();
  } catch (error) {
    console.log("Error in protectRoute middleware", error);
    res.status(500).json({ message: "Internal Server Error!!" });
  }
};
