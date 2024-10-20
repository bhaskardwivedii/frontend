// src/components/MultiLanguage.js
import React from 'react';
import { Container, Typography, Select, MenuItem } from '@mui/material';

const MultiLanguage = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Select Language
      </Typography>
      <Select variant="outlined">
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="es">Spanish</MenuItem>
      </Select>
    </Container>
  );
};

export default MultiLanguage;
