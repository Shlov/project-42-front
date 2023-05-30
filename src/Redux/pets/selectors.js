
export const selectPets = state => state.pets.pets;

export const getAddPetSuccessfulConnection = state =>
  state.pets.isResponseSuccessful;

export const getIsLoading = state => state.pets.isLoading;
