import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

// default Axios URL
axios.defaults.baseURL = 'https://fourtwo-back.onrender.com';

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

//Register
export const userReg = createAsyncThunk(
  'auth/reg',
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post('/auth/register', formData);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      if (e.message === 'Request failed with status code 401') {
        toast.error('Email or password is incorrect!');
      } else if (e.message === 'Network Error') {
        toast.error('Network Error, please check the connect');
      } else if (e.message === 'Request failed with status code 500') {
        toast.error(
          'The server encountered an unexpected error that prevented it from fulfilling the request'
        );
      } else if (e.message === 'Request failed with status code 409') {
        toast.error('Already in use');
      } else if (e.message === 'Request failed with status code 400') {
        toast.error('Error, something went wrong');
      }
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
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      if (e.message === 'Request failed with status code 401') {
        toast.error('Email or password is incorrect!');
      } else if (e.message === 'Network Error') {
        toast.error('Network Error, please check the connect');
      } else if (e.message === 'Request failed with status code 500') {
        toast.error(
          'The server encountered an unexpected error that prevented it from fulfilling the request'
        );
      } else if (e.message === 'Request failed with status code 409') {
        toast.error('Already in use');
      } else if (e.message === 'Request failed with status code 400') {
        toast.error('Error, something went wrong');
      }
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    await axios.post('/auth/logout', {
      headers: {
        Authorization: `Bearer ${persistedToken}`,
      },
    });
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */

export const currentUser = createAsyncThunk(
  'user/current',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const response = await axios.get('/user/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (values, thunkAPI) => {
    try {
      // Reading the token from the state via getState()
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;

      if (!persistedToken) {
        // If there is no token, exit without performing any request
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }

      setAuthHeader(persistedToken);

      const response = await axios.patch(`/user/update`, values);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.token;
    if (!persistedToken) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const response = await axios.get('/user/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
