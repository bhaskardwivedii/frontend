import React, { useState, useEffect } from "react";
import Web3 from "web3";
import Insurance from "./contracts/Insurance.json"; // Import contract ABI
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AboutUs from './components/AboutUs'; // Import the AboutUs component
import PolicyClaimForm from './components/PolicyClaimForm'; // Import the PolicyClaimForm component
import IntroductionPage from './components/IntroductionPage'; // Intro Page
import LoginPage from './components/LoginPage'; // Login Page
import ClaimsTracker from './components/ClaimsTracker'; // Import the Claims Tracker component
import PolicyRecommendations from './components/PolicyRecommendations'; // Adjust the path as necessary
import SupportUs from './components/SupportUs'; // Adjust the path as necessary

const theme = createTheme();

function App() {
  const [account, setAccount] = useState("");
  const [web3, setWeb3] = useState(null);
  const [insurance, setInsurance] = useState(null);
  const [contractAddress, setContractAddress] = useState(null);

  useEffect(() => {
    async function loadWeb3() {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          // Request account access if needed
          const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
          setAccount(accounts[0]);
          setWeb3(web3);

          // Load contract
          const networkId = await web3.eth.net.getId();
          const deployedNetwork = Insurance.networks[networkId];
          if (deployedNetwork) {
            const insuranceInstance = new web3.eth.Contract(
              Insurance.abi,
              deployedNetwork.address,
            );
            setInsurance(insuranceInstance);
            setContractAddress(deployedNetwork.address);
          } else {
            alert("Smart contract not deployed on detected network.");
          }
        } catch (error) {
          console.error("Error connecting to MetaMask", error);
        }
      } else {
        alert("Please install MetaMask to use this application.");
      }
    }
    loadWeb3();
  }, []);

  const createPolicy = async (premium, coverageAmount) => {
    try {
      await insurance.methods.createPolicy(premium, coverageAmount).send({ from: account, value: premium });
      alert("Policy Claimed Successfully");
    } catch (err) {
      console.error(err);
      alert("Failed to claim policy.");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        {/* Routes for navigation */}
        <Routes>
          {/* Introduction Page with Login/Signup */}
          <Route path="/" element={<IntroductionPage />} />
          {/* Login Page */}
          <Route path="/login" element={<LoginPage />} />
          {/* Policy Claim Form Page - only shown after login */}
          <Route path="/policy-claim" element={<PolicyClaimForm createPolicy={createPolicy} account={account} contractAddress={contractAddress} />} />
          {/* Claims Tracker Page */}
          <Route path="/claims-tracker" element={<ClaimsTracker />} /> {/* New route for Claims Tracker */}
        </Routes>
        <Routes>
        {/* Other routes */}
        <Route path="/policy-recommendations" element={<PolicyRecommendations />} />
      </Routes>
      <Routes>
        {/* Other routes */}
        <Route path="/support" element={<SupportUs />} />
      </Routes>
        {/* About Us section can remain in the App component if needed */}
        {/* <AboutUs /> */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
