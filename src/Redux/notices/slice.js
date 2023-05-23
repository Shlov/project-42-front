import { createSlice } from "@reduxjs/toolkit";
import { fetchNotices } from './operation';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const noticesInitialState = {
  items: [],
  isLoading: false,
  category: 'sell',
  filter: {query: '', gender: '', age: ''},
  pagination: {page: null, },
  error: '',
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState: noticesInitialState,

  extraReducers: {
    [fetchNotices.pending]: handlePending,
    [fetchNotices.fulfilled] (state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload.data;
    },
    [fetchNotices.rejected]: handleRejected,

  }
});


export const noticesReducer = noticesSlice.reducer;