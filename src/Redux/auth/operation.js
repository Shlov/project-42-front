import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// default Axios URL
axios.defaults.baseURL = '';

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

//Register
export const userReg = createAsyncThunk(
  'auth/reg',
  async (formData, thunkAPI) => {       
    try {
      const response = await axios.post('/register', formData);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
//Login
export const userLogin = createAsyncThunk(
  'auth/login',
  async (formData, thunkAPI) => {
    console.log(formData)
    try {
      const response = await axios.post('/login', formData);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);