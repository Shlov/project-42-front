import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// default Axios URL
axios.defaults.baseURL = 'https://fourtwo-back.onrender.com';

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};



// Utility to remove JWT
// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

//Register
export const userReg = createAsyncThunk(
  'auth/reg',
  async (formData, thunkAPI) => {       
    try {
      const response = await axios.post('/auth/register', formData);
      setAuthHeader(response.data.token);
      localStorage.setItem("token", JSON.stringify(`Bearer ${response.data.token}`))
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
    try {
      const response = await axios.post('/auth/login', formData);
      localStorage.setItem("token", JSON.stringify(`Bearer ${response.data.token}`))
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const refreshUser = createAsyncThunk('auth/refreshUser',
  async (_, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
