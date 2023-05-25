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


//   export const editingContact = createAsyncThunk(
//     'contacts/editingContact',
//     async (contact, thunkAPI) => {
//       try {
//         const response = await axios.patch(`/contacts/${contact.id}`, {
//           name: contact.name,
//           number: contact.number,
//         });
//         return response.data;
//       } catch (error) {
//         return thunkAPI.rejectWithValue(error.message);
//       }
//     }
//   );

// export const updateAvatar = createAsyncThunk(
//     'user/updateAvatar',
//     async (values, thunkAPI) => {
//       try {
//         // Reading the token from the state via getState()
//         const state = thunkAPI.getState();
//         const persistedToken = state.auth.token;
  
//         if (!persistedToken) {
//           // If there is no token, exit without performing any request
//           return thunkAPI.rejectWithValue('Unable to fetch user');
//         }
  
//         setAuthHeader(persistedToken);
  
//         const response = await axios.patch(`/user/avatars`, values);
  
//         return response.data;
//       } catch (error) {
//         return thunkAPI.rejectWithValue(error.message);
//       }
//     }
//   );