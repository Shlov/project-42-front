// import { createSelector } from '@reduxjs/toolkit';

export const selectPets = state => state.pets;

export const getAddPetSuccessfulConnection = state =>
  state.pets.isResponseSuccessful;
