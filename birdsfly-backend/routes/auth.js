const express = require('express');
const {
  registerUser,
  loginUser,
  sendOtp,
  verifyOtp,
  resetPassword,
  sendResetCode,
  verifyResetCode,
} = require('../controllers/authController');
const router = express.Router();

router.post('/signup', registerUser); 
router.post('/login', loginUser); 

router.post('/send-otp', sendOtp); 
router.post('/verify-otp', verifyOtp);

router.post('/send-reset-code', sendResetCode);
router.post('/verify-reset-code', verifyResetCode); 
router.post('/reset-password', resetPassword);

module.exports = router;
