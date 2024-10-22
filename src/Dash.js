import React, { useState } from 'react';

const Dash = ({ account, contractAddress, createPolicy }) => {

  
  const [premium, setPremium] = useState('');
  const [coverageAmount, setCoverageAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!premium || !coverageAmount) {
      alert('Please fill in both premium and coverage amount.');
      return;
    }
    createPolicy(premium, coverageAmount);
    setPremium('');
    setCoverageAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="premium">Premium:</label>
      <input type="text" id="premium" value={premium} onChange={(e) => setPremium(e.target.value)} />
      <label htmlFor="coverageAmount">Coverage Amount:</label>
      <input type="text" id="coverageAmount" value={coverageAmount} onChange={(e) => setCoverageAmount(e.target.value)} />
      <button type="submit">Create Policy</button>
    </form>
  );
};

export default Dash;