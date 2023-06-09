import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';


export const fetchPets = createAsyncThunk(
  'pets/fetchPets',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      const response = await axios.get('/user-pets', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success('Here is your own pets list!');
      return response.data;
    } catch (error) {
      toast.error('Something went wrong!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deletePet = createAsyncThunk(
  'pet/deletePet',
  async (petId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      const response = await axios.delete(`/pets/${petId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success('Pet card deleted!');

      return response.data;
    } catch (error) {
      toast.error('Something went wrong. Try again!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addPet = createAsyncThunk(
  'pets/addPet',
  async ({ formData }, thunkAPI) => {
    try {
      const response = await axios.post('pets/addpet', formData, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      });
      const newPet = response.data;
      toast.success('Successfully added to your pets');
      return newPet; // Return the new pet object as the payload of the fulfilled action
    } catch (error) {
      if (error.response.status === 400) {
        toast.error('Pet creation error. Please try again🙏');
      }
      if (error.response.status === 500) {
        toast.error('Server error. Please try later🙏');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
