import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isConnect: false
  },
  reducers: {
    setConnect: (state, action) => {
      state.isConnect = action.payload
    }
  }
})

export const { setConnect } = authSlice.actions

export default authSlice.reducer
