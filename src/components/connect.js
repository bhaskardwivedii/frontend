import React, { useState, useEffect } from "react";
import Web3 from "web3";
import Insurance from "../contracts/Insurance.json";

const Connect = () => {
  const [account, setAccount] = useState("");
  const [web3, setWeb3] = useState(null);
  const [insurance, setInsurance] = useState(null);
  const [contractAddress, setContractAddress] = useState(null);

  useEffect(() => {
    async function loadWeb3() {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
          setAccount(accounts[0]);
          setWeb3(web3);


          const networkId = await web3.eth.net.getId();
          const deployedNetwork = Insurance.networks[networkId];
          if (deployedNetwork) {
            const insuranceInstance = new web3.eth.Contract(
              Insurance.abi,
              deployedNetwork.address
            );
            setInsurance(insuranceInstance);
            setContractAddress(deployedNetwork.address);
          } else {
            console.error("Smart contract not deployed on detected network.");
          }
        } catch (error) {
          console.error("Error connecting to MetaMask", error);
        }
      }
    }
    loadWeb3();
  }, []);

  return { account, web3, insurance, contractAddress };
};

export default Connect;
