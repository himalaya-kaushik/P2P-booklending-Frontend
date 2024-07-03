import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const login = async (mobileNumber) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { mobileNumber });
    return response.data;
  } catch (error) {
    console.error('Login error', error);
    throw error;
  }
};

// Add other service functions as needed
