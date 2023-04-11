import React, { useState } from 'react';
import './Login.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Form validation using regular expressions
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address. ');
      return;
    }

    if (!passwordRegex.test(password)) {
      setError('Password must be at least 8 characters long and contain at least one letter and one number.');
      return;
    }

    // Check if user exists in local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      // User is authenticated
      if (user.email === 'peterkure256@gmail.com' && user.firstName === 'Peter' && user.lastName === 'Kure') {
        // Peter Kure is authenticated, redirect to admin page
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = '/admin';
      } else {
        // User is not authorized to access admin page
        setError('You are not authorized to access this page.');
      }
    } else {
      // Authentication failed
      setError('Invalid email or password.');
    }
  };

  return (
    <div className='container'>
      <h2>Login here</h2>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="text" name="email" value={email} placeholder = 'Email' onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={password} placeholder='*********' onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p>Don't have an account? <Link to='/signup'>Sign Up Here</Link></p>
    </div>
  );
}

export default Login;
