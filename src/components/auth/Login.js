// src/components/auth/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/apiService';
import FormControl from '../common/formControl';

const Login = () => {
  const [mobile, setMobile] = useState('');
  const [pin, setPin] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const response = await login(mobile, pin);
    if (response.isKycDone) {
      navigate('/lender/dashboard');
    } else {
      navigate('/lender/kyc');
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-2xl font-bold">Login</h1>
      <FormControl label="Mobile" type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} />
      <FormControl label="PIN" type="password" value={pin} onChange={(e) => setPin(e.target.value)} />
      <button onClick={handleLogin} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
        Login
      </button>
    </div>
  );
};

export default Login;
