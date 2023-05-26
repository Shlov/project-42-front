import { createSlice } from '@reduxjs/toolkit'


//Олексій
import {userReg, userLogin, refreshUser} from './operation'


export const authSlice = createSlice({
  name: 'auth',
  initialState: {

  // reducers: {
  //   setConnect: (state, action) => {
  //     state.isConnect = action.payload
  //   }
  // }


// Олекій

  user: {},
  token: '',
  isConnect: false,
  isRefreshing: false,
  },
  extraReducers: builder => {
    builder
      .addCase(userReg.fulfilled, (state, action) => {
        state.user.email = action.payload.result;
        state.token = action.payload.token;
        state.isConnect = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.user.email = action.payload.result;
        state.token = action.payload.token;
        state.isConnect = true;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
  },
})

export const { isConnect } = authSlice.actions



export default authSlice.reducer
