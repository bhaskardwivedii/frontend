// src/components/FraudDetection.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const FraudDetection = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Fraud Detection Alerts
      </Typography>
      <Typography>No fraudulent activities detected.</Typography>
    </Container>
  );
};

export default FraudDetection;
