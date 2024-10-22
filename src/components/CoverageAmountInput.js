// src/components/CoverageAmountInput.js
import React from 'react';

const CoverageAmountInput = ({ coverageAmount, setCoverageAmount }) => {
  return (
    <>
      <label style={{ marginBottom: '5px', fontSize: '16px', fontWeight: 'bold', color: 'rgba(255, 255, 255, 0.7)' }}>
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
          border: '1px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '5px',
          color: 'white',
          padding: '8px',
          marginBottom: '10px',
        }}
      />
    </>
  );
};

export default CoverageAmountInput;
