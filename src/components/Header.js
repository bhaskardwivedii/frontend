// src/components/Header.js
import React, { useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const Header = () => {
  useEffect(() => {
    const header = document.querySelector('header');
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: header,
        start: "top top",
        end: "+=100%",
        scrub: 1,
        pin: true,
        snap: 1 / 5,
        ease: "none"
      }
    });

    tl.to(header, { duration: 1, backgroundColor: "#f0f0f0", ease: "power2.out" });
    tl.to(header, { duration: 1, color: "#000000", ease: "power2.out" }, 0); // added color animation
    tl.to(header, { duration: 0, position: "fixed", top: 0, left: 0, right: 0, ease: "power2.out" }, 0); // added position fixed
  }, []);

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      <AppBar position="static" style={{ backgroundColor: 'black', height: '70px', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Toolbar>
          <Typography variant="h6" style={{ transition: 'transform 0.2s ease-in-out', textShadow: '2px 2px 8px #000000' }} onMouseOver={(e) => e.target.style.transform = 'scale(1.2)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>
            BL0CKSURE
          </Typography>
          <div style={{ marginLeft: '800px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '40px', height: '40px' }} onClick={() => {
              const page1 = document.getElementById('page1');
              if (page1.style.opacity === '2') {
                page1.style.opacity = '-2';
              } else {
                page1.style.opacity = '2';
              }
            }}>
              <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
            </svg>
          </div>
        </Toolbar>
        <div id='page1' style={{  height: '50vh', width: '250px', background: 'linear-gradient(to right, #141E30, #243B55)', zIndex: -2, position: 'absolute', right: 0, top: '70px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '38px', opacity: '-2', borderRadius: '10px' }}> 
          <button style={{ 
            width: '40%', // Increased width of the button
            height: 22,
            fontSize: '18px', 
            background: 'linear-gradient(to right, #141E30, #243B55)', 
            color: 'white', 
            textShadow: '2px 2px 8px #000000', 
            boxShadow: '2px 2px 8px #000000', 
            border: 'none', 
            borderRadius: '3px', 
            transition: 'transform 0.2s ease-in-out',
            cursor: 'pointer' // Changed cursor to pointer on hover
          }} onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>
            Sign in
          </button>
          <a style={{ 
            fontSize: '20px', // Increased font size
            transition: 'transform 0.2s ease-in-out', // Added transition on hover
            cursor: 'pointer' // Changed cursor to pointer on hover
          }} onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>
            policies
          </a>
          <a style={{ 
            fontSize: '20px', // Increased font size
            transition: 'transform 0.2s ease-in-out', // Added transition on hover
            cursor: 'pointer' // Changed cursor to pointer on hover
          }} onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>
            Account
          </a>
          <a style={{ 
            fontSize: '20px', // Increased font size
            transition: 'transform 0.2s ease-in-out', // Added transition on hover
            cursor: 'pointer' // Changed cursor to pointer on hover
          }} onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>
            Holdings
          </a>
          <a style={{ 
            fontSize: '20px', // Increased font size
            transition: 'transform 0.2s ease-in-out', // Added transition on hover
            cursor: 'pointer' // Changed cursor to pointer on hover
          }} onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>
            Language
          </a>
        </div>
        <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li> {/* Add link to dashboard */}
        </ul>
      </nav>
      </AppBar>
   
    </>
  );
};

export default Header;
