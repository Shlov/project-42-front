import { createSlice } from '@reduxjs/toolkit';
import { fetchPets, deletePet, addPet } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const petsInitialState = {
  pets: [],
  isLoggedIn: false,
  isLoading: false,
  error: '',
  isResponseSuccessful: false,
};

const petsSlice = createSlice({
  name: 'pets',
  initialState: petsInitialState,

  extraReducers: {
    [fetchPets.fulfilled](state, action) {
      state.pets = action.payload.result.pets;
    },
    [deletePet.fulfilled](state, action) {
      const index = state.pets.findIndex(item => item.id === action.payload);
      state.pets.splice(index, 1);
    },
    [addPet.pending]: handlePending,
    [addPet.fulfilled](state, action) {
      state.pets.push(action.payload); // // Add the new pet to the Redux store
      state.isLoading = false;
      state.error = '';
      state.isResponseSuccessful = true;
    },
    [addPet.rejected]: handleRejected,
  },
});

export default petsSlice.reducer;