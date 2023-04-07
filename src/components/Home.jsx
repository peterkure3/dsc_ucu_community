import React from 'react';
import Navbar from './Navbar';
import './Home.css';

function Home() {
  return (
    <div className='home-container' >
      <Navbar  />
      
      <h1 className='home-title'>DSC UCU Community</h1>
      <p className='home-description'>
        Google Developer Student Clubs (DSCs) are community groups for university and college students interested in learning about Google technologies and developer tools.
        These clubs are open to any student, regardless of their academic background or major.
      </p>

      <p className='home-description'>There is nothing better than having one in your own university. 
      <br />
      Welcome to UCU's very own
       DSC UCU Community.</p>

       <p  className='home-description'>Feel free to become a Member.</p>
       <div className='home-image'>
       <img src="https://th.bing.com/th/id/R.c9db375af78893af65c0bffc795f34e6?rik=zM52%2bNTrel7ipQ&pid=ImgRaw&r=0" alt="students" />

       </div>
    </div>
  )
};

export default Home;
