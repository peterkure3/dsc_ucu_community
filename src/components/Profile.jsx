import React from 'react';
import './Profile.css'

function Profile() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const handleLogout = () => {
    localStorage.removeItem('userData');
    window.location.href = '/login';
  };
  return (
    <div className='profile-container'>
      <h2>{currentUser.firstName}'s Profile</h2>
      <p>Name: {currentUser.firstName}</p>
      <p>Email: {currentUser.email}</p>
      <p>Phone: {currentUser.phoneNumber}</p>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}


export default Profile;
