import { createSlice } from '@reduxjs/toolkit'

//Ірина

// import { currentUser, updateUser } from './operation';

//Олексій
import {userReg, userLogin, logOut} from './operation'


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
      .addCase(logOut.fulfilled, state => {
        state.user = { email: '' };
        state.token = '';
        state.isLoggedIn = false;
      })
  },

})

export const { isConnect } = authSlice.actions



export default authSlice.reducer






  