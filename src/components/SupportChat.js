// src/components/SupportChat.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const SupportChat = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Support Chat
      </Typography>
      <Typography>Chat with our support team.</Typography>
      {/* Chat integration can be added here */}
    </Container>
  );
};

export default SupportChat;
