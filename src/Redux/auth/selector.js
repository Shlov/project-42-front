export const selectUser = state => state.auth.user;

export const getConnect = state => state.auth.isConnect;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectEmail = state => state.auth.user.email;