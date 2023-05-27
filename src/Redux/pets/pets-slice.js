import { createSlice } from '@reduxjs/toolkit';
import { fetchPets, deletePet, addPet } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const petsSlice = createSlice({
  name: 'pets',
  initialState: [],
  isLoggedIn: false,
  isLoading: false,
  error: '',
  reducers: {
    [fetchPets.fulfilled](state, action) {
      state = action.payload;
    },
    [deletePet.fulfilled](state, action) {
      const index = state.findIndex(item => item.id === action.payload);
      state.splice(index, 1);
    },
    [addPet.pending]: handlePending,
    [addPet.fulfilled](state, action) {
      state.push(action.payload); // // Add the new pet to the Redux store
      state.isLoading = false;
      state.error = '';
    },
    [addPet.rejected]: handleRejected,
  },
});

export default petsSlice.reducer;
