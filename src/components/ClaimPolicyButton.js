// src/components/ClaimPolicyButton.js
import React from 'react';

const ClaimPolicyButton = ({ handleSubmit }) => {
  return (
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
        transition: 'background 0.3s ease',
      }}
    >
      Claim Policy
    </button>
  );
};

export default ClaimPolicyButton;
