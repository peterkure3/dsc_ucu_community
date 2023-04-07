import React from 'react';
import { Link } from 'react-router-dom';
import './Confirmation.css';

const Confirmation = () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  return (
    <div className='confirmation-container'>
      <h1>Thank you for signing up!</h1>
      <p>{currentUser?.firstName} ! You have successfully signed up. 
      <br />
      Click the button below to go to your dashboard.</p>

      <Link to="/dashboard">
        <button>Go to Dashboard</button>
      </Link>
    </div>
  );
};

export default Confirmation;