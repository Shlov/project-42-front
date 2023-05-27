import { createSlice } from '@reduxjs/toolkit'

//Ірина

// import { currentUser, updateUser } from './operation';

//Олексій
import {userReg, userLogin, refreshUser} from './operation'


export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    //Ірина

  //   user: {name: '', email: '', phone: '', birthday: '', city: ''},
  //   isConnect: false,
  //   isLoggedIn: false,
  //   isLoading: false,
  // },
  // extraReducers: {
  //   [currentUser.fulfilled]: (state, { payload }) => {
  //     state.user = payload;
  //     state.isLoading = false;
   
  //   },
  //   [currentUser.pending]: state => {
  //     state.isLoading = true;
  //   },
  //   [currentUser.rejected]: (state, { payload }) => {
  //     state.isLoading = false;
  //     state.isLoggedIn = false;
    
  //   },
  //   [updateUser.fulfilled]: (state, { payload }) => {
  //     state.user = payload;
  //     state.isLoggedIn = true;
  //     state.isLoading = false;
  //   },
  //   [updateUser.pending]: state => {
  //     state.isLoading = true;
  //   },
  //   [updateUser.rejected]: (state, { payload }) => {
  //     state.isLoading = false;
  //     state.isLoggedIn = false;
   
  //   },
  // },






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
        state.user = action.payload.result;
        state.token = action.payload.token;
        state.isConnect = true;
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
        state.user = action.payload;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
  },
})

export const { isConnect } = authSlice.actions



export default authSlice.reducer
