import { createSlice } from '@reduxjs/toolkit'
import { currentUser, updateUser } from './operation';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {name: '', email: '', phone: '', birthday: '', city: ''},
    isConnect: false,
    isLoggedIn: false,
    isLoading: false,
  },
  extraReducers: {
    [currentUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoading = false;
   
    },
    [currentUser.pending]: state => {
      state.isLoading = true;
    },
    [currentUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = false;
    
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [updateUser.pending]: state => {
      state.isLoading = true;
    },
    [updateUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = false;
   
    },
  },






  reducers: {
    setConnect: (state, action) => {
      state.isConnect = action.payload
    }
  }
})

export const { setConnect } = authSlice.actions

export default authSlice.reducer
