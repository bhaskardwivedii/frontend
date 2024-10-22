// src/components/ConnectedAccount.js
import React from 'react';

const ConnectedAccount = ({ account }) => {
  return (
    <p style={{ color: 'white', textAlign: 'center' }}>
      Connected Account: {account}
    </p>
  );
};

export default ConnectedAccount;
