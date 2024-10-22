import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import { contractABI, contractAddress } from '../utils/contractABI';

const InsuranceDashboard = () => {
    const [account, setAccount] = useState('');
    const [contract, setContract] = useState(null);
    const [coverageAmount, setCoverageAmount] = useState('');
    const [claimAmount, setClaimAmount] = useState('');
    const [externalData, setExternalData] = useState('');
    
    useEffect(() => {
        const initWeb3 = async () => {
            if (window.ethereum) {
                const web3 = new Web3(window.ethereum);
                const accounts = await web3.eth.requestAccounts();
                setAccount(accounts[0]);

                const insuranceContract = new web3.eth.Contract(contractABI, contractAddress);
                setContract(insuranceContract);
            } else {
                alert("Please install MetaMask to interact with the contract.");
            }
        };
        initWeb3();
    }, []);

    const createPolicy = async () => {
        try {
            await contract.methods.createPolicy(coverageAmount).send({ from: account, value: coverageAmount });
            alert("Policy created successfully!");
        } catch (error) {
            console.error(error);
            alert("Error creating policy.");
        }
    };

    const submitClaim = async () => {
        try {
            await contract.methods.submitClaim(1, claimAmount, externalData).send({ from: account });
            alert("Claim submitted successfully!");
        } catch (error) {
            console.error(error);
            alert("Error submitting claim.");
        }
    };

    return (
        <div>
            <h1>Insurance Dashboard</h1>
            <div>
                <h2>Create Policy</h2>
                <input
                    type="text"
                    placeholder="Coverage Amount"
                    value={coverageAmount}
                    onChange={(e) => setCoverageAmount(e.target.value)}
                />
                <button onClick={createPolicy}>Create Policy</button>
            </div>
            <div>
                <h2>Submit Claim</h2>
                <input
                    type="text"
                    placeholder="Claim Amount"
                    value={claimAmount}
                    onChange={(e) => setClaimAmount(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="External Data"
                    value={externalData}
                    onChange={(e) => setExternalData(e.target.value)}
                />
                <button onClick={submitClaim}>Submit Claim</button>
            </div>
        </div>
    );
};

export default InsuranceDashboard;
