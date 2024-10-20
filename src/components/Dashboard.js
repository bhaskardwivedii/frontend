import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const Dashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              Dashboard
            </Typography>
            <Typography color="textSecondary">
              Welcome to your insurance dashboard! Here you can manage your policies and claims.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" component="h3">Active Policies</Typography>
            <Typography>Your active policies are listed here.</Typography>
            {/* Sample Policies */}
            <ul>
              <li>Home Insurance - Coverage Amount: $100,000</li>
              <li>Car Insurance - Coverage Amount: $50,000</li>
            </ul>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" component="h3">Recent Claims</Typography>
            <Typography>Your recent claims are listed here.</Typography>
            {/* Sample Claims */}
            <ul>
              <li>Claim ID: 1234 - Status: Approved</li>
              <li>Claim ID: 5678 - Status: Pending</li>
            </ul>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
