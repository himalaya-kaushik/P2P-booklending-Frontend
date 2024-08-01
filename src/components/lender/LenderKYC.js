// src/components/lender/LenderKYC.js
import React, { useState } from 'react';
import FormControl from '../common/formControl';
import { kycVerification } from '../../api/apiService';

const LenderKYC = () => {
  const [kycData, setKycData] = useState({
    fullName: '',
    idNumber: '',
    address: '',
  });

  const handleKycSubmit = async () => {
    const response = await kycVerification(kycData);
    console.log('KYC Submitted:', response);
  };

  const handleChange = (e) => {
    setKycData({ ...kycData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-2xl font-bold">KYC Verification</h1>
      <FormControl label="Full Name" type="text" name="fullName" value={kycData.fullName} onChange={handleChange} />
      <FormControl label="ID Number" type="text" name="idNumber" value={kycData.idNumber} onChange={handleChange} />
      <FormControl label="Address" type="text" name="address" value={kycData.address} onChange={handleChange} />
      <button onClick={handleKycSubmit} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
        Submit KYC
      </button>
    </div>
  );
};

export default LenderKYC;
