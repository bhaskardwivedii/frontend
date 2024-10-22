import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from react-router-dom
import { Button, TextField, Box, Typography } from '@mui/material';

function LoginPage() {
  const [userId, setUserId] = useState('');
  const [policyNumber, setPolicyNumber] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [isRegistering, setIsRegistering] = useState(false); // State to track if registering
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleLogin = (e) => {
    e.preventDefault();
    // Here, you can add logic to verify login credentials; for now we just redirect
    // For simplicity, assuming login is successful

    // Redirect to the PolicyClaimForm page after login
    navigate('/policy-claim');
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Here, you can add logic to register the user; for now we just log the information
    console.log({ email, name, age, userId, policyNumber, dob });

    // Assuming registration is successful
    navigate('/policy-claim');
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      flexDirection="column"
      sx={{
        backgroundColor: '#141E30', // Dark background
        color: 'white', // White text
        padding: '20px',
      }}
    >
      <Typography variant="h4" gutterBottom>
        {isRegistering ? "Register as New User" : "Login to Your Account"}
      </Typography>

      {/* Toggle between Login and Registration Forms */}
      <Button
        variant="outlined"
        onClick={() => setIsRegistering(false)}
        sx={{ marginBottom: 2, color: '#fff', borderColor: '#5C9EDD' }}
      >
        Login
      </Button>
      <Button
        variant="outlined"
        onClick={() => setIsRegistering(true)}
        sx={{ marginBottom: 2, color: '#fff', borderColor: '#5C9EDD' }}
      >
        Register as New User
      </Button>

      <form onSubmit={isRegistering ? handleRegister : handleLogin} style={{ width: '100%', maxWidth: '400px' }}>
        {/* Render Login Fields */}
        {!isRegistering && (
          <>
            <Box mb={2}>
              <TextField
                label="User ID / Login ID"
                variant="outlined"
                fullWidth
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                InputLabelProps={{ style: { color: '#fff' } }} // Label color
                InputProps={{
                  style: { color: '#fff' }, // Input text color
                  sx: {
                    backgroundColor: '#243B55', // Input background color
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#fff', // Border color
                      },
                      '&:hover fieldset': {
                        borderColor: '#5C9EDD', // Hover border color
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#5C9EDD', // Focused border color
                      },
                    },
                  },
                }}
              />
            </Box>
            <Box mb={2}>
              <TextField
                label="Policy Number"
                variant="outlined"
                fullWidth
                value={policyNumber}
                onChange={(e) => setPolicyNumber(e.target.value)}
                InputLabelProps={{ style: { color: '#fff' } }} // Label color
                InputProps={{
                  style: { color: '#fff' }, // Input text color
                  sx: {
                    backgroundColor: '#243B55', // Input background color
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#fff', // Border color
                      },
                      '&:hover fieldset': {
                        borderColor: '#5C9EDD', // Hover border color
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#5C9EDD', // Focused border color
                      },
                    },
                  },
                }}
              />
            </Box>
            <Box mb={2}>
              <TextField
                label="Date of Birth (YYYY-MM-DD)"
                type="date"
                InputLabelProps={{ shrink: true, style: { color: '#fff' } }} // Label color
                variant="outlined"
                fullWidth
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                InputProps={{
                  style: { color: '#fff' }, // Input text color
                  sx: {
                    backgroundColor: '#243B55', // Input background color
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#fff', // Border color
                      },
                      '&:hover fieldset': {
                        borderColor: '#5C9EDD', // Hover border color
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#5C9EDD', // Focused border color
                      },
                    },
                  },
                }}
              />
            </Box>
          </>
        )}

        {/* Render Registration Fields */}
        {isRegistering && (
          <>
            <Box mb={2}>
              <TextField
                label="Email Address"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputLabelProps={{ style: { color: '#fff' } }} // Label color
                InputProps={{
                  style: { color: '#fff' }, // Input text color
                  sx: {
                    backgroundColor: '#243B55', // Input background color
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#fff', // Border color
                      },
                      '&:hover fieldset': {
                        borderColor: '#5C9EDD', // Hover border color
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#5C9EDD', // Focused border color
                      },
                    },
                  },
                }}
              />
            </Box>
            <Box mb={2}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                InputLabelProps={{ style: { color: '#fff' } }} // Label color
                InputProps={{
                  style: { color: '#fff' }, // Input text color
                  sx: {
                    backgroundColor: '#243B55', // Input background color
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#fff', // Border color
                      },
                      '&:hover fieldset': {
                        borderColor: '#5C9EDD', // Hover border color
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#5C9EDD', // Focused border color
                      },
                    },
                  },
                }}
              />
            </Box>
            <Box mb={2}>
              <TextField
                label="Age"
                variant="outlined"
                fullWidth
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                InputLabelProps={{ style: { color: '#fff' } }} // Label color
                InputProps={{
                  style: { color: '#fff' }, // Input text color
                  sx: {
                    backgroundColor: '#243B55', // Input background color
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#fff', // Border color
                      },
                      '&:hover fieldset': {
                        borderColor: '#5C9EDD', // Hover border color
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#5C9EDD', // Focused border color
                      },
                    },
                  },
                }}
              />
            </Box>

            <Box mb={2}>
              <TextField
                label="Policy Number"
                variant="outlined"
                fullWidth
                value={policyNumber}
                onChange={(e) => setPolicyNumber(e.target.value)}
                InputLabelProps={{ style: { color: '#fff' } }} // Label color
                InputProps={{
                  style: { color: '#fff' }, // Input text color
                  sx: {
                    backgroundColor: '#243B55', // Input background color
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#fff', // Border color
                      },
                      '&:hover fieldset': {
                        borderColor: '#5C9EDD', // Hover border color
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#5C9EDD', // Focused border color
                      },
                    },
                  },
                }}
              />
            </Box>
            <Box mb={2}>
              <TextField
                label="Date of Insurance (YYYY-MM-DD)"
                type="date"
                InputLabelProps={{ shrink: true, style: { color: '#fff' } }} // Label color
                variant="outlined"
                fullWidth
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                InputProps={{
                  style: { color: '#fff' }, // Input text color
                  sx: {
                    backgroundColor: '#243B55', // Input background color
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#fff', // Border color
                      },
                      '&:hover fieldset': {
                        borderColor: '#5C9EDD', // Hover border color
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#5C9EDD', // Focused border color
                      },
                    },
                  },
                }}
              />
            </Box>
          </>
        )}

        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{
            backgroundColor: '#5C9EDD', // Button color
            color: 'white',
            '&:hover': {
              backgroundColor: '#4A8BC7', // Button hover color
            },
          }}
        >
          {isRegistering ? "Register" : "Login"}
        </Button>
      </form>
    </Box>
  );
}

export default LoginPage;
