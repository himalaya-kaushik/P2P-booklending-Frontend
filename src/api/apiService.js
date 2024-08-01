// src/api/apiService.js
import axios from "axios";

const API_URL = "https://your-api-url.com";

export const login = async (mobile, pin) => {
  const response = await axios.post(`${API_URL}/login`, { mobile, pin });
  return response.data;
};

export const kycVerification = async (userId, kycData) => {
  const response = await axios.post(`${API_URL}/kyc/${userId}`, kycData);
  return response.data;
};
