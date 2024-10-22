import React from 'react';
import './VerticalNavBar.css'; // Import the CSS file for styling

const VerticalNavBar = () => {
  return (
    <div className="vertical-nav">
      <a href="#home">Home</a>
      <a href="#services">Services</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </div>
  );
};

export default VerticalNavBar;
