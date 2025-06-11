const User = require("../models/userModel");
require("dotenv").config();


const getUserProfile = async (req, res) => {
  try {
    const user = await User.findByEmail(req.user.email);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({
      id: user.id,
      fullName: user.name,
      email: user.email,
      role: user.role,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({
      id: user.id,
      fullName: user.name,
      phone: user.phone,
      email: user.email,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAllUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
    console.log(err);
  }
};

module.exports = {
  getUserProfile,
  getUserById,
  getAllUsers,
};
