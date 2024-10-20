import React from 'react';
import { Card, CardContent, Typography, List, ListItem } from '@mui/material';

const Tutorials = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          Tutorials
        </Typography>
        <List>
          <ListItem><a href="#">How to File a Claim</a></ListItem>
          <ListItem><a href="#">Understanding Your Policy</a></ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default Tutorials;
