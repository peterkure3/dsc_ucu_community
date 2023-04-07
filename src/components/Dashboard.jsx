import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    window.location.href = '/login';
  };

  return (
    <div className='dashboard-container'>
      <h1>Welcome to your Dashboard</h1>
      <p>What would you like to do?</p>
      <ul>
        <li>
          <Link to='/events'>View Events</Link>
        </li>
        <li>
          <Link to='/profile'>View Profile</Link>
        </li>
      </ul>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
