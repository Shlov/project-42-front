import { createSlice } from '@reduxjs/toolkit'

import {userReg, userLogin, refreshUser, logOut} from './operation'


export const authSlice = createSlice({
  name: 'auth',
  initialState: {

  user: {},
  token: '',
  isConnect: false,
  isRefreshing: false,
  isNewUser: false,
  },
  extraReducers: builder => {
    builder
      .addCase(userReg.fulfilled, (state, action) => {
        state.user = action.payload.result;
        state.token = action.payload.token;
        state.isConnect = true;
        state.isNewUser = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.user = action.payload.result;
        state.token = action.payload.token;
        state.isConnect = true;
      }) 
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload.result;
        state.isRefreshing = false;
        state.isConnect = true;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = {};
        state.token = '';
        state.isConnect = false;
      })
  },
})

export const { isConnect } = authSlice.actions
export const{ isNewUser } = authSlice.actions



export default authSlice.reducer
