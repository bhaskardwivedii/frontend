import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const LandingPage = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.landing-page',
        start: "top top",
        end: "+=100%",
        scrub: 1,
        pin: true,
        snap: 1 / 5,
        ease: "none"
      }
    });

    tl.to('.landing-page', { duration: 1, background: 'linear-gradient(to right, #243B55, #141E30)', ease: "power2.out" });
    tl.to('.welcome-text', { duration: 1, opacity: 1, ease: "power2.out" }, 0);
    tl.to('.get-started-btn', { duration: 1, opacity: 1, ease: "power2.out" }, 0);
    tl.to('.footer-text', { duration: 1, opacity: 1, ease: "power2.out" }, 0);
  }, []);

  return (
    <div className="landing-page"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: 'linear-gradient(to right, #243B55, #141E30)',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        opacity: 0,
        backgroundColor: 'black',
      }}
     
    >
      <img src="smartcontracts.png" alt="Smart Contracts" style={{ width: '500px', height: '500px', marginBottom: '20px' }} />
      <h1 className="welcome-text" style={{ fontSize: '48px', marginBottom: '20px', opacity: 0 }}>Welcome to BlockSure Innovations</h1>
      <p style={{ fontSize: '20px', marginBottom: '40px', opacity: 0 }}>
        Your reliable partner for innovative blockchain solutions. Join us in revolutionizing the way you secure your assets!
      </p>
      <button className="get-started-btn"
        style={{
          background: 'linear-gradient(to right, #141E30, #243B55)',
          color: 'white',
          border: 'none',
          padding: '15px 30px',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '18px',
          transition: 'background 0.3s ease',
          opacity: 0,
        }}
        onClick={() => {
          // Redirect to your desired page or function
          alert('Get Started!'); // Replace this with your actual function
        }}
      >
        Get Started
      </button>

      <footer style={{ marginTop: '40px', fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)', opacity: 0 }}>
        &copy; {new Date().getFullYear()} BlockSure Innovations. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
