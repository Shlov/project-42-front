import { createSlice } from '@reduxjs/toolkit';
import {
  fetchNotices,
  fetchNotice,
  getNoticeByCategory,
  // addNotice,
} from './operation';

const handlePending = state => {
  state.isLoadNotices = true;
};

const handleRejected = (state, action) => {
  state.isLoadNotices = false;
  state.error = action.payload;
};

const noticesInitialState = {
  noticesByCategory: [],
  items: [],
  item: {},
  isLoadNotices: false,
  isLoadNotice: false,
  category: 'sell',
  filter: { query: '', gender: '', age: '' },
  pagination: { page: null },
  error: '',
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState: noticesInitialState,

  extraReducers: {
    [fetchNotices.pending]: handlePending,
    [fetchNotices.fulfilled](state, action) {
      state.isLoadNotices = false;
      state.error = null;
      state.items = action.payload.data.notices;
    },
    [fetchNotices.rejected]: handleRejected,
    [fetchNotice.pending](state) {
      state.isLoadNotice = true;
    },
    [fetchNotice.fulfilled](state, action) {
      state.isLoadNotice = false;
      state.error = null;
      state.item = action.payload.data.notice;
    },
    [fetchNotice.rejected]: handleRejected,
    [getNoticeByCategory.pending]: handlePending,
    [getNoticeByCategory.fulfilled](state, action) {
      state.noticesByCategory = action.payload.data;
      state.isLoading = false;
      state.error = null;
    },
    // [addNotice.pending]: handlePending,
    // [addNotice.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    // },
    // [addNotice.rejected]: handleRejected,
  },
});

export const noticesReducer = noticesSlice.reducer;
