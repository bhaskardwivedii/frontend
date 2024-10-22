// SupportUs.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Social media logos (Replace with actual URLs of your logos)
const socialMediaLinks = [
  {
    name: 'Facebook',
    url: 'https://facebook.com',
    logo: '/https://imgs.search.brave.com/m4rvy8vjT3VT-bwNdQKLeXx4Xtyd8LBR8SzrSLsNjck/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzMyLzIwLzAz/LzM2MF9GXzUzMjIw/MDM1NV9vZEtOOU91/M1dCNmlIV0pURklF/bEZ0SmJUdXpKc3BZ/Ni5qcGc', // Replace with actual logo URL
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    logo: '/path/to/twitter-logo.png', // Replace with actual logo URL
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com',
    logo: '/path/to/instagram-logo.png', // Replace with actual logo URL
  },
];

const SupportUs = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        opacity: 1,
        backgroundColor: 'black',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundImage: "url('/path/to/your/image.jpeg')", // Update this with the correct image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <div
        style={{
          height: '70%',
          width: '40%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          background: '#141E30',
          borderRadius: '20px',
          padding: '20px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
        }}
      >
        <h1 style={{ color: 'white', textAlign: 'center' }}>Support Us</h1>
        <p style={{ color: 'white', textAlign: 'center', marginBottom: '20px' }}>
          Contact us 24/7 for any inquiries or support.
        </p>
        <p style={{ color: 'white' }}>
          <strong>Sample Landline Number:</strong> +1-234-567-8900
        </p>
        <p style={{ color: 'white' }}>
          <strong>Email:</strong> <a href="mailto:support@example.com" style={{ color: 'lightblue' }}>support@example.com</a>
        </p>
        <h2 style={{ color: 'white', marginTop: '20px' }}>Follow us on Social Media:</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '10px' }}>
          {socialMediaLinks.map((social) => (
            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer">
              <img
                src={social.logo}
                alt={social.name}
                style={{ width: '40px', height: '40px', cursor: 'pointer' }}
              />
            </a>
          ))}
        </div>
        <button
          onClick={() => navigate('/policy-claim')} // Redirect to the policy-claim page using navigate
          style={{
            background: 'linear-gradient(to right, #141E30, #243B55)',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '20px',
            transition: 'background 0.3s ease',
          }}
          onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
        >
          Back to Policy Claim
        </button>
      </div>
    </div>
  );
};

export default SupportUs;
