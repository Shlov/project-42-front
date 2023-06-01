import { createSlice } from '@reduxjs/toolkit'

export const mainSlice = createSlice({
  name: 'main',
  initialState: {
    desktop: true,
    tablet: false,
    mobile: false,
    theme: 'day'
  },
  reducers: {
    setDesktop: (state, action) => {
      state.desktop = action.payload
    },
    setTablet: (state, action) => {
      state.tablet = action.payload
    },
    setMobile: (state, action) => {
      state.mobile = action.payload
    },
    setTheme: (state, action) => {
      state.theme = action.payload
    }
  }
})

export const { setDesktop, setTablet, setMobile, setTheme } = mainSlice.actions

export default mainSlice.reducer
