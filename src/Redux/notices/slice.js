import { createSlice } from '@reduxjs/toolkit';
import {
  fetchNotices,
  fetchNotice,
  getNoticeByCategory,
  addNotice,
  getFavoriteNotices,
  updateFavorite,
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
  favorites: [],
  isResponseSuccessful: false,
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
      state.favorites = action.payload.data.notice.favorite;
    },
    [fetchNotice.rejected]: handleRejected,
    [getNoticeByCategory.pending]: handlePending,
    [getNoticeByCategory.fulfilled](state, action) {
      state.noticesByCategory = action.payload.data;
      state.isLoading = false;
      state.error = null;
    },
    [addNotice.pending]: handlePending,
    [addNotice.fulfilled](state, action) {
      state.isLoading = false;
      state.error = '';
      state.isResponseSuccessful = true;
    },
    [addNotice.rejected]: handleRejected,
  },
  [getFavoriteNotices.fulfilled](state, action) {
    state.items = action.payload.data.notices;
  },
  [updateFavorite.pending]: state => {
    state.isLoadNotice = true;
  },
  [updateFavorite.fulfilled](state, action) {
    state.isLoadNotice = false;
    state.error = '';
    // if (action.payload.notice.favorite) {
      state.item.favorite.push(state.auth.user.id);
      state.favorites.push(state.auth.user.id)
    // } else {
    //  тут буде слайс
    // }

  },
  [updateFavorite.rejected]: (state, action) => {
    state.error = action.payload;
  },
});

export const noticesReducer = noticesSlice.reducer;
