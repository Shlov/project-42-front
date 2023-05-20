import { createSlice } from '@reduxjs/toolkit'

export const mainSlice = createSlice({
  name: 'main',
  initialState: {
    desktop: true,
    tablet: false,
    mobile: false
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
    }
  }
})

export const { setDesktop, setTablet, setMobile } = mainSlice.actions

export default mainSlice.reducer
