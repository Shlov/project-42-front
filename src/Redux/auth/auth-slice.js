import { createSlice } from '@reduxjs/toolkit'
import {userReg, userLogin} from './operation'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
  user: { email: '' },
  token: '',
  isConnect: false
  },
   extraReducers: builder => {
    builder
      .addCase(userReg.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isConnect = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isConnect = true;
      })
  },
})

export const { isConnect } = authSlice.actions



export default authSlice.reducer






  