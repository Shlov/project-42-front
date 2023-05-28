// import { createSelector } from '@reduxjs/toolkit';

export const selectPets = state => state.pets.items;

export const getAddPetSuccessfulConnection = state =>
  state.pets.isResponseSuccessful;
