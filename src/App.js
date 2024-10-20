import React, { useState, useEffect } from "react";
import Web3 from "web3";
import Insurance from "./contracts/Insurance.json";  // Import contract ABI
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Dash from './components/dash';  // Import the Dash component

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
      }
    }
    loadWeb3();
  }, []);

  const createPolicy = async (premium, coverageAmount) => {
    try {
      await insurance.methods.createPolicy(premium, coverageAmount).send({ from: account, value: premium });
      alert("Policy Created Successfully");
    } catch (err) {
      console.error(err);
      alert("Failed to create policy.");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <h1>BlockSure Innovations</h1>
          <p>Connected Account: {account}</p>
          <p>Contract Address: {contractAddress}</p>
          
          {/* Add forms and buttons for UI interaction */}

          <form onSubmit={(e) => {
            e.preventDefault();
            const premium = e.target.premium.value;
            const coverageAmount = e.target.coverageAmount.value;
            createPolicy(premium, coverageAmount);
          }}>
            <label>Premium (in Wei): </label>
            <input type="number" name="premium" required />
            <br />
            <label>Coverage Amount: </label>
            <input type="number" name="coverageAmount" required />
            <br />
            <button type="submit">Claim Policy</button>
          </form>

          {/* Add the Dash component */}
          <Dash />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
