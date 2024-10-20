// src/components/Footer.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ marginTop: '20px', padding: '20px 0', backgroundColor: '#f5f5f5' }}>
      <Container>
        <Typography variant="body1" align="center">
          &copy; 2024 Insurance DApp. All Rights Reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
