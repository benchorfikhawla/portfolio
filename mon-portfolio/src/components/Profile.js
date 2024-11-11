// src/Profile.js

import React, { useState } from 'react';

const Profile = () => {
  // Sample user data (you can replace this with real data from an API or props)
  const [user, setUser] = useState({
    name: "KHAWLA ",
    email: "johndoe@example.com",
    bio: "This is my bio. I'm a software developer.",
    profilePicture: "https://via.placeholder.com/150",
  });

  // Handler to update the bio (as an example)
  const handleBioChange = (event) => {
    setUser({
      ...user,
      bio: event.target.value,
    });
  };

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <div className="profile-info">
        <img src={user.profilePicture} alt="Profile" className="profile-picture" />
        <div className="profile-details">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <textarea
            value={user.bio}
            onChange={handleBioChange}
            className="profile-bio"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
