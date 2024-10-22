import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const PolicyClaimForm = ({ createPolicy, account, contractAddress }) => {
  const [premium, setPremium] = useState('');
  const [coverageAmount, setCoverageAmount] = useState('');
  const [policyType, setPolicyType] = useState(''); // State for policy type
  const [documents, setDocuments] = useState([]); // State for uploaded documents
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (event) => {
    event.preventDefault();
    createPolicy(premium, coverageAmount, policyType, documents); // Include additional parameters
    setPremium('');
    setCoverageAmount('');
    setPolicyType('');
    setDocuments([]);
  };

  const handleFileChange = (event) => {
    setDocuments([...event.target.files]); // Update documents state with selected files
  };

  const handleNavigation = (page) => {
    console.log(`${page} button clicked`);
    // Use navigate to redirect to the desired page
    switch (page) {
      case 'Claim Submissions':
        navigate('/policy-claim'); // Redirect to the policy claim form
        break;
      case 'Claims Tracker':
        navigate('/claims-tracker'); // Redirect to the claims tracker
        break;
      case 'Policy Recommendations':
        navigate('/policy-recommendations'); // Redirect to policy recommendations
        break;
      case 'Support Us':
        navigate('/support'); // Redirect to support tab
        break;
      default:
        break;
    }
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
        backgroundImage: `url(https://media.istockphoto.com/id/1339714824/vector/handshake-of-a-robot-and-a-human.jpg?s=1024x1024&w=is&k=20&c=6CbwT3bcHpMMJVaP41b6GKMoZESd6ungSHMtWZUkb6A=)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Header with functional buttons */}
      <div
        style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#243B55',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: '20px 20px 0 0',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
        }}
      >
        <h2
          style={{
            color: 'white',
            margin: '0',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            transition: 'transform 0.3s ease',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
          onClick={() => navigate('/')} // Home button redirect to introduction page
        >
          Home
        </h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          {/* Navigation buttons */}
          {['Claim Submissions', 'Claims Tracker', 'Policy Recommendations', 'Support Us'].map((page) => (
            <button
              key={page}
              onClick={() => handleNavigation(page)}
              style={{
                background: 'linear-gradient(to right, #141E30, #243B55)',
                color: 'white',
                border: 'none',
                padding: '10px 15px',
                borderRadius: '5px',
                cursor: 'pointer',
                transition: 'background 0.3s ease, transform 0.3s ease',
                textTransform: 'uppercase',
                fontWeight: 'bold',
              }}
              onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
            >
              {page}
            </button>
          ))}
        </div>
      </div>

      {/* Main form section */}
      <div
        style={{
          height: '80%',
          width: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          background: 'rgba(20, 30, 48, 0.9)', // Slightly transparent background
          borderRadius: '20px',
          padding: '30px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
        }}
      >
        <p style={{ color: 'white', textAlign: 'center' }}>Connected Account: {account}</p>
        <p style={{ color: 'white', textAlign: 'center', wordWrap: 'break-all' }}>Contract Address: {contractAddress}</p>

        <form onSubmit={handleSubmit} style={{ color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <label style={{ marginBottom: '5px', fontSize: '16px', fontWeight: 'bold', color: 'rgba(255, 255, 255, 0.9)' }}>
            Select Policy Type:
          </label>
          <select
            value={policyType}
            onChange={(e) => setPolicyType(e.target.value)}
            required
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.5)',
              borderRadius: '5px',
              color: 'white',
              padding: '8px',
              marginBottom: '15px',
              width: '100%', // Full width
            }}
          >
            <option value="" disabled>Select a type</option>
            <option value="Health Insurance">Health Insurance</option>
            <option value="Auto Insurance">Auto Insurance</option>
            <option value="Property Insurance">Property Insurance</option>
            <option value="Travel Insurance">Travel Insurance</option>
            <option value="Crop Insurance">Crop Insurance</option>
            <option value="Liability Insurance">Liability Insurance</option>
            <option value="Other">Other</option>
          </select>

          <label style={{ marginBottom: '5px', fontSize: '16px', fontWeight: 'bold', color: 'rgba(255, 255, 255, 0.9)' }}>
            Premium (in Wei)
          </label>
          <input
            type="number"
            name="premium"
            value={premium}
            onChange={(e) => setPremium(e.target.value)}
            required
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.5)',
              borderRadius: '5px',
              color: 'white',
              padding: '8px',
              marginBottom: '15px',
              width: '100%', // Full width
            }}
          />
          <br />
          <label style={{ marginBottom: '5px', fontSize: '16px', fontWeight: 'bold', color: 'rgba(255, 255, 255, 0.9)' }}>
            Coverage Amount:
          </label>
          <input
            type="number"
            name="coverageAmount"
            value={coverageAmount}
            onChange={(e) => setCoverageAmount(e.target.value)}
            required
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.5)',
              borderRadius: '5px',
              color: 'white',
              padding: '8px',
              marginBottom: '15px',
              width: '100%', // Full width
            }}
          />
          <br />
          
          <label style={{ marginBottom: '5px', fontSize: '16px', fontWeight: 'bold', color: 'rgba(255, 255, 255, 0.9)' }}>
            Upload Proof Documents:
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            multiple // Allow multiple files
            required
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.5)',
              borderRadius: '5px',
              color: 'white',
              padding: '8px',
              marginBottom: '15px',
              width: '100%', // Full width
            }}
          />
          <br />
          
          <button
            type="submit"
            style={{
              alignSelf: 'center',
              background: 'linear-gradient(to right, #141E30, #243B55)',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background 0.3s ease, transform 0.3s ease',
              width: '100%', // Full width
            }}
            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
          >
            Claim Policy
          </button>
          <p style={{ color: 'white', marginTop: '10px' }}>Please upload all necessary documents to support your claim.</p>
        </form>
      </div>
    </div>
  );
};

export default PolicyClaimForm;
