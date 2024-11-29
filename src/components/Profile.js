import React, { useState, useEffect } from "react";

const Profile = ({ isLoggedIn, fetchUserProfile, saveUserProfile }) => {
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [isEditMode, setIsEditMode] = useState(true); // Initially editable for first-time users

  useEffect(() => {
    if (isLoggedIn) {
      // Fetch profile data for logged-in users
      fetchUserProfile().then((data) => {
        setProfileData(data);
        setIsEditMode(false); // Switch to view mode
      });
    }
  }, [isLoggedIn, fetchUserProfile]);

  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    saveUserProfile(profileData); // Save profile to the database
    setIsEditMode(false); // Switch to view mode
  };

  if (!isLoggedIn) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h2>Please Log In to View Your Profile</h2>
      </div>
    );
  }

  return (
    <div className="profile-container">
      {/* Header Section */}
      <header className="profile-header">
        <div className="profile-logo">
          <img
            src="/logo-placeholder.png" // Replace with your logo
            alt="Logo"
            className="common-logo"
          />
        </div>
        <h2>Your Profile</h2>
      </header>

      {/* Profile Information */}
      <section className="profile-info">
        <h3>Personal Information</h3>
        <div className="profile-field">
          <label>Name:</label>
          {isEditMode ? (
            <input
              type="text"
              name="name"
              value={profileData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          ) : (
            <p>{profileData.name || "Not Provided"}</p>
          )}
        </div>
        <div className="profile-field">
          <label>Email:</label>
          {isEditMode ? (
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          ) : (
            <p>{profileData.email || "Not Provided"}</p>
          )}
        </div>
        <div className="profile-field">
          <label>Phone:</label>
          {isEditMode ? (
            <input
              type="text"
              name="phone"
              value={profileData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          ) : (
            <p>{profileData.phone || "Not Provided"}</p>
          )}
        </div>
        <div className="profile-field">
          <label>Address:</label>
          {isEditMode ? (
            <textarea
              name="address"
              value={profileData.address}
              onChange={handleChange}
              placeholder="Enter your address"
            ></textarea>
          ) : (
            <p>{profileData.address || "Not Provided"}</p>
          )}
        </div>
      </section>

      {/* Action Buttons */}
      {isEditMode ? (
        <button onClick={handleSave} className="save-btn">
          Save
        </button>
      ) : (
        <button onClick={() => setIsEditMode(true)} className="edit-btn">
          Edit Profile
        </button>
      )}
    </div>
  );
};

export default Profile;
