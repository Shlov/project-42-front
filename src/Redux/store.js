import { configureStore } from '@reduxjs/toolkit'
import mainSlice from './main/main-slice'
import authSlice from './auth/auth-slice'
import petsSlice from './pets/pets-slice'

export const store = configureStore({
  reducer: {
    main: mainSlice,
    auth: authSlice,
    pets: petsSlice
  },
  devTools: true
})
