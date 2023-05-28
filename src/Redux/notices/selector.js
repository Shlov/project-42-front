export const getNotices = state => state.notices.items;

export const getNotice = state => state.notices.item;

export const getIsLoadNotices = state => state.notices.isLoadNotices;

export const getIsLoadNotice = state => state.notices.isLoadNotice;

export const selectNoticesByCategory = state => state.notices.noticesByCategory;

export const selectFavorites = state => state.notices.favorites;

export const getAddNoticeSuccessfulConnection = state =>
  state.notices.isResponseSuccessful;
