// ClaimsTracker.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const ClaimsTracker = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [policyNumber, setPolicyNumber] = useState(''); // State for policy number
  const [claimDate, setClaimDate] = useState(''); // State for claim date
  const [insuranceDate, setInsuranceDate] = useState(''); // State for insurance date

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    console.log("Policy Number:", policyNumber);
    console.log("Claim Date:", claimDate);
    console.log("Insurance Date:", insuranceDate);
    // Add logic to check claim status here
    alert("Claim status checked successfully!"); // Alert for successful check
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
        <h1 style={{ color: 'white', textAlign: 'center' }}>Claims Tracker</h1>
        <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <label style={{ marginBottom: '5px', color: 'white' }}>Policy Number:</label>
          <input
            type="text"
            value={policyNumber}
            onChange={(e) => setPolicyNumber(e.target.value)}
            required
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '5px',
              color: 'white',
              padding: '8px',
              marginBottom: '10px',
              width: '100%', // Full width
            }}
          />
          <label style={{ marginBottom: '5px', color: 'white' }}>Policy Claim Date:</label>
          <input
            type="date"
            value={claimDate}
            onChange={(e) => setClaimDate(e.target.value)}
            required
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '5px',
              color: 'white',
              padding: '8px',
              marginBottom: '10px',
              width: '100%', // Full width
            }}
          />
          <label style={{ marginBottom: '5px', color: 'white' }}>Date of Insurance:</label>
          <input
            type="date"
            value={insuranceDate}
            onChange={(e) => setInsuranceDate(e.target.value)}
            required
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '5px',
              color: 'white',
              padding: '8px',
              marginBottom: '10px',
              width: '100%', // Full width
            }}
          />
          <button
            type="submit"
            style={{
              background: 'linear-gradient(to right, #141E30, #243B55)',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '10px',
              transition: 'background 0.3s ease',
            }}
            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
          >
            Check Claim Status
          </button>
        </form>
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
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default ClaimsTracker;
