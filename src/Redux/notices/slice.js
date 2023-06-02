import { createSlice } from '@reduxjs/toolkit';
import {
  fetchNotices,
  fetchNotice,
  getNoticeByCategory,
  addNotice,
  getFavoriteNotices,
  updateFavorite,
  deleteNotice,
  getUserNotices,
} from './operation';

const handlePending = state => {
  state.isLoadNotices = true;
};

const handleRejected = (state, action) => {
  state.isLoadNotices = false;
  state.error = action.payload;
};

const noticesInitialState = {
  items: [],
  item: {notice : {favorite: []}, user: {}},
  isLoadNotices: false,
  isLoadNotice: false,
  category: 'all',
  filter: { query: '', gender: '', age: '' },
  pagination: {},
  error: '',
  isResponseSuccessful: false,
  futurePage: 1,
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState: noticesInitialState,
  reducers:{
    updateFuturePage: {
      reducer(state, action) {
        state.futurePage = action.payload;
      },
      prepare(page) {
        return {
          payload: page,
        };
      },
    },
    setCategory: {
      reducer(state, action) {
        state.category = action.payload;
      },
      prepare(nameCategory) {
        return {
          payload: nameCategory,
        };
      },
    },
  },
  extraReducers: {

    // Notices
    
    [fetchNotices.pending]: handlePending,
    [fetchNotices.fulfilled](state, action) {
      state.category = 'all';
      state.isLoadNotices = false;
      state.error = null;
      state.items = action.payload.message ? [] : action.payload.data.notices;
      state.pagination = action.payload.message ? {} : action.payload.data.pagination;
      state.isResponseSuccessful = false;},
    [fetchNotices.rejected]: handleRejected,

    [getNoticeByCategory.pending]: handlePending,
    [getNoticeByCategory.fulfilled](state, action) {
      state.category = 'cat';
      state.items = action.payload.message ? [] : action.payload.data.notices;
      state.isLoadNotices = false;
      state.error = null;
      state.pagination = action.payload.message ? {} : action.payload.data.pagination;
      state.isResponseSuccessful = false;},
    [getNoticeByCategory.rejected]: handleRejected,

    [getFavoriteNotices.pending]: handlePending,
    [getFavoriteNotices.fulfilled](state, action) {
      console.log(action)
      state.category = 'favorites-ads';
      state.isLoadNotices = false;
      state.error = null;
      state.pagination = action.payload.message ? {} : action.payload.data.pagination;
      state.items = action.payload.message ? [] : action.payload.data.notices;},
    [getFavoriteNotices.rejected]: handleRejected,

    [getUserNotices.pending]: handlePending,
    [getUserNotices.fulfilled](state, action) {
      state.category = 'my-ads';
      state.isLoadNotices = false;
      state.error = null;
      state.items = action.payload.message ? [] : action.payload.data.notices;
      state.pagination = action.payload.message ? {} : action.payload.data.pagination;},
    [getUserNotices.rejected]: handleRejected,

        // Notice

    [fetchNotice.pending](state) {
      state.isLoadNotice = true; },
    [fetchNotice.fulfilled](state, action) {
      state.isLoadNotice = false;
      state.error = null;
      state.item = action.payload.data; },
    [fetchNotice.rejected]: handleRejected,

    [updateFavorite.fulfilled](state, action) {
      state.error = '';
      state.item.notice.favorite = action.payload.data.notice.favorite;
      if (!action.meta.arg.isFavorite && state.category === 'favorites-ads') {
        state.items = state.items.filter(item => item.id !== action.meta.arg.noticeId);
      } else {
        state.items = state.items.map(item => {
          if (item.id !== action.meta.arg.noticeId) {
            return item
          } else {
            return {...item, favorite: action.payload.data.notice.favorite}
          }
        })
      }
    },
    [updateFavorite.rejected](state, action) {
      state.error = action.payload; },

    [addNotice.pending]: handlePending,
    [addNotice.fulfilled](state, action) {
      state.isLoading = false;
      state.error = '';
      state.isResponseSuccessful = true; },
    [addNotice.rejected]: handleRejected,

    [deleteNotice.pending](state){
      state.isLoadNotice = true; },
    [deleteNotice.fulfilled](state, action) {
      state.isLoadNotice = false;
      state.items = state.items.filter(
        item => item.id !== action.meta.arg)
      state.error = ''; },
    [deleteNotice.rejected](state, action){
      state.error = action.payload; },
  },
});

export const {updateFuturePage, setCategory} = noticesSlice.actions;
export const noticesReducer = noticesSlice.reducer;
