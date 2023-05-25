import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { currentUser } from './operation';
// import { fetchContacts, , deleteContact, editingContact } from './operations';

const authSlice = createSlice({
    name: 'auth',
    initialState:{ user: { name: null, email: null, phone: null, birthday: null, city: null, avatarURL: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,},
    extraReducers: builder => {
      builder
        .addCase(currentUser.fulfilled, (state, action) => {
          state.user = action.payload;
          state.isLoggedIn = true;
          state.isRefreshing = false;
        })
        .addCase(refreshUser.rejected, state => {
          state.isRefreshing = false;
        });
    },
  });
  
  export const authReducer = authSlice.reducer;





























// const extraActions = [currentUser, editingContact];
// const getActions = type => extraActions.map(action => action[type]);

// export const userSlice = createSlice({
//   name: 'user',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: builder => {
//     return builder
//       .addCase(currentUser.fulfilled, (state, action) => {
//         state.items = action.payload;
//       })
  
    //   .addCase(deleteContact.fulfilled, (state, action) => {
    //     state.items = state.items.filter(
    //       contact => contact.id !== action.payload.id
    //     );
    //   })
    //   .addCase(editingContact.fulfilled, (state, action) => {
        // const i = state.items.findIndex(
        //   values => user.id === action.payload.id
        // );
//         state.items.splice(i, 1, {
//           ...state.items[i],
//           name: action.payload.name,
//           email: action.payload.email,
//           phone: action.payload.phone,
//           city: action.payload.city,
//           birthday: action.payload.birthday,
//           avatarURL: action.payload.avatarURL,


//         });
//       })
//       .addMatcher(isAnyOf(...getActions('pending')), state => {
//         state.isLoading = true;
//       })
//       .addMatcher(isAnyOf(...getActions('rejected')), (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })
//       .addMatcher(isAnyOf(...getActions('fulfilled')), state => {
//         state.isLoading = false;
//         state.error = null;
//       });
//   },
// });

// export const userReducer = userSlice.reducer;