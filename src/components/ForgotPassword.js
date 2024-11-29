import React, { useState } from 'react';
import './ForgotPassword.css';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      // Call API to send verification code
      const response = await axios.post('/api/auth/send-reset-code', { email });
      setSuccess(response.data.msg || 'Verification code sent successfully.');
      setStep(2);
    } catch (err) {
      setError(err.response?.data?.msg || 'Failed to send verification code.');
    }
  };

  const handleCodeSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      // Call API to verify the code
      const response = await axios.post('/api/auth/verify-reset-code', {
        email,
        verificationCode,
      });
      setSuccess(response.data.msg || 'Code verified successfully.');
      setStep(3);
    } catch (err) {
      setError(err.response?.data?.msg || 'Failed to verify the code.');
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      // Call API to reset the password
      const response = await axios.post('/api/auth/reset-password', {
        email,
        newPassword,
      });
      setSuccess(response.data.msg || 'Password has been changed successfully!');
      setEmail('');
      setVerificationCode('');
      setNewPassword('');
      setStep(1);
    } catch (err) {
      setError(err.response?.data?.msg || 'Failed to reset the password.');
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-form">
        <h1>Forgot Password</h1>
        {error && <div className="error-msg">{error}</div>}
        {success && <div className="success-msg">{success}</div>}
        {step === 1 && (
          <form onSubmit={handleEmailSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <button type="submit" className="submit-btn">Send Verification Code</button>
          </form>
        )}
        {step === 2 && (
          <form onSubmit={handleCodeSubmit}>
            <div className="input-group">
              <label htmlFor="verificationCode">Verification Code</label>
              <input
                type="text"
                id="verificationCode"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                placeholder="Enter the code"
                required
              />
            </div>
            <button type="submit" className="submit-btn">Verify Code</button>
          </form>
        )}
        {step === 3 && (
          <form onSubmit={handlePasswordChange}>
            <div className="input-group">
              <label htmlFor="newPassword">New Password</label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                required
              />
            </div>
            <button type="submit" className="submit-btn">Change Password</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
