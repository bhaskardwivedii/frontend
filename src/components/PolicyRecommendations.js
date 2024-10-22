// PolicyRecommendations.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const insuranceCompanies = [
  {
    name: 'LIC (Life Insurance Corporation of India)',
    website: 'https://www.licindia.in/',
  },
  {
    name: 'HDFC Life Insurance',
    website: 'https://www.hdfclife.com/',
  },
  {
    name: 'ICICI Prudential Life Insurance',
    website: 'https://www.iciciprulife.com/',
  },
  {
    name: 'Max Life Insurance',
    website: 'https://www.maxlifeinsurance.com/',
  },
  {
    name: 'Tata AIG General Insurance',
    website: 'https://www.tataaig.com/',
  },
  {
    name: 'Bajaj Allianz General Insurance',
    website: 'https://www.bajajallianz.com/',
  },
  {
    name: 'New India Assurance',
    website: 'https://www.newindia.co.in/',
  },
];

const PolicyRecommendations = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRedirect = (website) => {
    alert("You will be redirected to the company's website.");
    window.open(website, '_blank'); // Open the website in a new tab
  };

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
        <h1 style={{ color: 'white', textAlign: 'center' }}>Policy Recommendations</h1>
        <ul style={{ listStyleType: 'none', padding: 0, color: 'white', width: '100%' }}>
          {insuranceCompanies.map((company, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>
              <span style={{ color: 'white', fontSize: '18px' }}>{company.name}</span>
              <button
                onClick={() => handleRedirect(company.website)}
                style={{
                  marginLeft: '10px',
                  background: 'linear-gradient(to right, #141E30, #243B55)',
                  color: 'white',
                  border: 'none',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  transition: 'background 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
              >
                Visit
              </button>
            </li>
          ))}
        </ul>
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

export default PolicyRecommendations;
