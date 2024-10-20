// src/components/ClaimsTracker.js
import React from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  title: {
    marginBottom: theme.spacing(3),
    fontWeight: 'bold',
  },
  table: {
    minWidth: 650,
  },
  tableHead: {
    backgroundColor: theme.palette.primary.main,
  },
  tableHeadCell: {
    color: theme.palette.common.white,
    fontWeight: 'bold',
  },
  tableRow: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}));

const ClaimsTracker = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h4" className={classes.title} gutterBottom>
        Claims Status Tracker
      </Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell className={classes.tableHeadCell}>Claim ID</TableCell>
              <TableCell className={classes.tableHeadCell}>Status</TableCell>
              <TableCell className={classes.tableHeadCell}>Date Submitted</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className={classes.tableRow}>
              <TableCell>1</TableCell>
              <TableCell>Approved</TableCell>
              <TableCell>2024-10-01</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ClaimsTracker;
