import { configureStore } from '@reduxjs/toolkit'
import mainSlice from './main/main-slice'
import authSlice from './auth/auth-slice'
import { noticesReducer } from './notices/slice'
import petsSlice from './pets/pets-slice'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import persistStore from "redux-persist/es/persistStore";

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const themePersistConfig = {
  key: 'theme',
  storage,
  whitelist: ['theme'],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authSlice);
const persistedThemeReducer = persistReducer(themePersistConfig, mainSlice);

export const store = configureStore({
  reducer: {
    main: persistedThemeReducer,
    auth: persistedAuthReducer,
    notices: noticesReducer,
    pets: petsSlice
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  devTools: true
});

export const persistor = persistStore(store);


