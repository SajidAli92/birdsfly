const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const nodemailer = require('nodemailer');
const crypto = require('crypto'); // For generating OTP
const JWT_SECRET = process.env.JWT_SECRET || 'yourSecretKey';

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


const registerUser = async (req, res) => {
  const { fullname, email, password, mobile } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    user = new User({ fullname, email, password, mobile });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: { id: user.id },
    };

    jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid email or password' });
    }

    const payload = {
      user: { id: user.id },
    };

    jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const otps = {};
const resetCodes = {};

const sendOtp = async (req, res) => {
  const { email } = req.body;

  try {
    const otp = crypto.randomInt(100000, 999999).toString();
    otps[email] = { otp, expiresAt: Date.now() + 10 * 60 * 1000 }; 

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your OTP for Password Reset',
      text: `Your OTP is: ${otp}`,
    });

    res.status(200).json({ msg: 'OTP sent successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Error sending OTP' });
  }
};

const verifyOtp = (req, res) => {
  const { email, otp } = req.body;

  try {
    const storedOtp = otps[email];
    if (!storedOtp || storedOtp.otp !== otp || Date.now() > storedOtp.expiresAt) {
      return res.status(400).json({ msg: 'Invalid OTP or OTP has expired' });
    }

    delete otps[email]; 
    res.status(200).json({ msg: 'OTP verified successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'OTP verification failed' });
  }
};

const sendResetCode = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    const resetCode = crypto.randomInt(100000, 999999).toString();
    resetCodes[email] = { resetCode, expiresAt: Date.now() + 10 * 60 * 1000 }; // Code valid for 10 minutes

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Password Reset Code',
      text: `Your password reset code is: ${resetCode}`,
    });

    res.status(200).json({ msg: 'Password reset code sent successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Error sending reset code' });
  }
};

const verifyResetCode = (req, res) => {
  const { email, resetCode } = req.body;

  try {
    const storedCode = resetCodes[email];
    if (!storedCode || storedCode.resetCode !== resetCode || Date.now() > storedCode.expiresAt) {
      return res.status(400).json({ msg: 'Invalid or expired reset code' });
    }

    delete resetCodes[email]; 
    res.status(200).json({ msg: 'Reset code verified successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Error verifying reset code' });
  }
};

const resetPassword = async (req, res) => {
  const { email, newPassword } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);
    await user.save();

    res.status(200).json({ msg: 'Password reset successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  registerUser,
  loginUser,
  sendOtp,
  verifyOtp,
  resetPassword,
  sendResetCode,
  verifyResetCode,
};
