const express = require('express');
const { registerUser, loginUser, getUserProfile, updateUserRole, getUsersByRole } = require('../controllers/authController');
const { protect, authorize } = require('../middlewares/authMiddleware');
const { getUserById, getAllUsers, getUserDetails } = require('../controllers/userController');

const router = express.Router();

router.get('/user/:userId', getUserById);
router.get('/users/all', getAllUsers);



module.exports = router;