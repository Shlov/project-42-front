export const getNotices = state => state.notices.items;

export const getNotice = state => state.notices.item;

export const getIsLoadNotices = state => state.notices.isLoadNotices;

export const getIsLoadNotice = state => state.notices.isLoadNotice;

export const selectNoticesByCategory = state => state.notices.noticesByCategory;

export const getAddNoticeSuccessfulConnection = state =>
  state.notices.isResponseSuccessful;

  export const getPagination = state => state.notices.pagination;

  export const getFuturePage = state => state.notices.futurePage;

