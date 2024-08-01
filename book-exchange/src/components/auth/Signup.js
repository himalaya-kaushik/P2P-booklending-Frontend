// src/components/auth/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormControl from '../common/formControl';
import { register } from '../../api/apiService';

const Signup = () => {
  const [mobile, setMobile] = useState('');
  const [pin, setPin] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    const response = await register(mobile, pin);
    navigate('/login');
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-2xl font-bold">Sign Up</h1>
      <FormControl label="Mobile" type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} />
      <FormControl label="PIN" type="password" value={pin} onChange={(e) => setPin(e.target.value)} />
      <button onClick={handleSignup} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
        Sign Up
      </button>
    </div>
  );
};

export default Signup;
