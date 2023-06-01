import { createSlice } from '@reduxjs/toolkit'

import {userReg, userLogin, refreshUser, logOut, updateUser} from './operation'


export const authSlice = createSlice({
  name: 'auth',
  initialState: {

  user: {},
  token: '',
  isConnect: false,
  isRefreshing: false,
  isNewUser: false,
  isLoading: false,
  },
  extraReducers: builder => {
    builder
      .addCase(userReg.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userReg.fulfilled, (state, action) => {
        state.user = action.payload.result;
        state.token = action.payload.token;
        state.isConnect = true;
        state.isNewUser = true;
        state.isLoading = false;
      })
      .addCase(userReg.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(userLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.user = action.payload.result;
        state.token = action.payload.token;
        state.isConnect = true;
        state.isLoading = false;
      }) 
      .addCase(userLogin.rejected, (state) => {
        state.isLoading = false;
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
        state.isNewUser = false;
        state.isRefreshing = false;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload.result };
    })
  },
})

export const { isConnect } = authSlice.actions
export const{ isNewUser } = authSlice.actions



export default authSlice.reducer
