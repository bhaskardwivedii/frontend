// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Insurance DApp
        </Typography>
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <Button color="inherit">Dashboard</Button>
        </Link>
        <Link to="/claims" style={{ textDecoration: 'none', color: 'white' }}>
          <Button color="inherit">Claims Tracker</Button>
        </Link>
        <Link to="/recommendations" style={{ textDecoration: 'none', color: 'white' }}>
          <Button color="inherit">Policy Recommendations</Button>
        </Link>
        <Link to="/fraud-detection" style={{ textDecoration: 'none', color: 'white' }}>
          <Button color="inherit">Fraud Detection</Button>
        </Link>
        <Link to="/support" style={{ textDecoration: 'none', color: 'white' }}>
          <Button color="inherit">Support</Button>
        </Link>
        <Link to="/language" style={{ textDecoration: 'none', color: 'white' }}>
          <Button color="inherit">Language</Button>
        </Link>
        <Link to="/tutorials" style={{ textDecoration: 'none', color: 'white' }}>
          <Button color="inherit">Tutorials</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
