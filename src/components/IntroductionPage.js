import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AboutUs from './AboutUs'; // Import the AboutUs component

function IntroductionPage() {
  const [scrolling, setScrolling] = useState(false);

  // Handle scroll event to add/remove animation class
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh', // Allow scrolling without height restriction
        backgroundColor: 'black', // Set the main background color to black
        color: 'white',
        textAlign: 'center',
        paddingBottom: '40px', // Add padding at the bottom for better spacing
        overflow: 'hidden', // Prevent overflow
      }}
    >
      <div
        className={`intro-content ${scrolling ? 'fade-in' : ''}`}
        style={{
          backgroundColor: '#1B2E4E', // Darker shade of blue for the intro section
          padding: '40px',
          borderRadius: '15px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
        }}
      >
        <h1 style={{ fontSize: '3rem', marginBottom: '20px', marginTop: '60px' }}>BlockSure Innovations</h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '40px' }}>
          Simplifying insurance claims with the power of blockchain.
        </p>
        
        <Link to="/login">
          <button
            style={{
              padding: '10px 30px',
              fontSize: '1.2rem',
              backgroundColor: '#007BFF', // Light blue for button
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: '0.3s',
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')} // Darker blue on hover
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#007BFF')}
          >
            Login / Signup
          </button>
        </Link>
      </div>

      {/* AboutUs section below the main content */}
      <div style={{ marginTop: '60px', width: '100%', backgroundColor: 'rgba(0, 0, 128, 0.5)', padding: '20px' }}>
        <AboutUs />
      </div>
    </div>
  );
}

export default IntroductionPage;
