import { createSlice } from '@reduxjs/toolkit';
import { fetchPets, deletePet } from './operations';

const petsSlice = createSlice({
  name: 'pets',
  initialState: {items: [], isLoggedIn: false, isLoading: false, error: ''},
  reducers: {
    [fetchPets.fulfilled](state, action) {
    state.items = action.payload;
      
    },
    [deletePet.fulfilled](state, action) {
      const index = state.findIndex(item => item.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export default petsSlice.reducer;
