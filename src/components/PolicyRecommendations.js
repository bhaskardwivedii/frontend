// src/components/PolicyRecommendations.js
import React from 'react';
import { Container, Typography, List, ListItem } from '@mui/material';

const PolicyRecommendations = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Policy Recommendations
      </Typography>
      <List>
        <ListItem>Policy A: Coverage Amount $10,000</ListItem>
        <ListItem>Policy B: Coverage Amount $20,000</ListItem>
      </List>
    </Container>
  );
};

export default PolicyRecommendations;
