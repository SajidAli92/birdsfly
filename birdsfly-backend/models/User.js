const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String },
  password: { type: String, required: true },
  otp: {
    code: { type: String }, 
    expiresAt: { type: Date },
  },
});

module.exports = mongoose.model('User', UserSchema);
