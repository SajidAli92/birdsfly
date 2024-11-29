import React, { useState } from 'react';
import './SignUp.css';
import BirdsFlyLogo from "../images/birdsflylogo2.png";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    try {
      setLoading(true);
      await axios.post('http://localhost:5000/api/auth/send-otp', {
        email,
      });
      setOtpSent(true);
      setError('');
    } catch (err) {
      setError(err.response?.data?.msg || 'Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:5000/api/auth/verify-otp', {
        email,
        otp,
      });

      if (response.data.msg === 'OTP verified successfully') {
        await axios.post('http://localhost:5000/api/auth/signup', {
          fullname,
          email,
          mobile,
          password,
        });
        navigate('/login');
      }

      setError('');
    } catch (err) {
      setError(err.response?.data?.msg || 'OTP Verification Failed');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!otpSent) {
      handleSendOtp();
    } else {
      handleVerifyOtp();
    }
  };

  return (
    <div className='main-unique-container'>
      <div className="unique-container">
        <div className="unique-signup-form">
          <div className="unique-header">
            <img src={BirdsFlyLogo} alt="Birdsfly Icon" className="unique-logo" />
            <h1>Join BirdsFly</h1>
            <p>Create your account to start shopping!</p>
          </div>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="unique-input-group">
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                id="fullname"
                placeholder="Enter your full name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
              />
            </div>
            <div className="unique-input-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="unique-input-group">
              <label htmlFor="mobile">Mobile Number</label>
              <input
                type="tel"
                id="mobile"
                placeholder="Enter your mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </div>
            {otpSent && (
              <div className="unique-input-group">
                <label htmlFor="otp">Enter OTP</label>
                <input
                  type="text"
                  id="otp"
                  placeholder="Enter the OTP sent to your email"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
              </div>
            )}
            <div className="unique-input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="unique-input-group-checkbox">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">
                By continuing, you agree to BirdsFly's <Link to="/">Terms</Link> and <Link to="/">Privacy Policy</Link>.
              </label>
            </div>
            <button type="submit" className="unique-signup-btn" disabled={loading}>
              {loading ? 'Processing...' : otpSent ? 'Verify OTP' : 'Send OTP'}
            </button>
          </form>
          <p className="unique-signin-link">Already have an account? <Link to="/login">Sign in</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
