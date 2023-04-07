import React from 'react';
import { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState('Member'); // default role
  const [error, setError] = useState('');

  const handleSignUp = (event) => {
    event.preventDefault();

    // Form validation using regular expressions
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const phoneRegex = /^\d+$/;

    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!passwordRegex.test(password)) {
      setError('Password must be at least 8 characters long and contain at least one letter and one number.');
      return;
    }
    if (!phoneRegex.test(phoneNumber)) {
      alert("Please enter a valid phone number");
      return;
    }


    // Store user data in local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = { firstName, lastName, email, password, phoneNumber, role };
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    // alert message diplays
    alert('Congratulations, you have registered successfully!');

    // Redirect to confirmation page after loggin in
    window.location.href = '/confirmation';
  };
  return (
    <div className='signup-container'>
      <h1>Sign Up Here</h1>
      {error && <div>{error}</div>}
      <div className='signup-form'>
        <form onSubmit={handleSignUp}>
          <div className='name-container'>
        <label>
          First Name:
          <input type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
          <br />
          <label>
          Last Name:
          <input type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
        </div>
          <br />
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br  />
        <label>
        Phone Number:
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </label>
        <br />
        <label>
          Role:
          
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="Member">Member</option>
            <option value="Club Lead">Club Lead</option>
            <option value="Event Coordinator">Event Coordinator</option>
            <option value="Technical Lead">Technical Lead</option>
            <option value="Mentorship Lead">Mentorship Lead</option>
            <option value="Design Lead">Design Lead</option>
            <option value="Outreach Lead">Outreach Lead</option>
          </select>
          
          
        </label>
        <br />
        <input type="submit" value="Submit" />

        </form>
        <p>Already have an account? <a href="login">Log In</a></p>
      </div>
    </div>
  );
};

export default Signup;
