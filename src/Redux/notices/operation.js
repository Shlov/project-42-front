import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";



axios.defaults.baseURL = 'https://fourtwo-back.onrender.com/';

export const fetchNotices = createAsyncThunk('notices/all', 
  async(_, thunkAPI) => {
    try {
      const response = await axios.get('/notices'
      // {
      //   headers: {
      //     Authorization: `Bearer ${token}`
      //   },
      // }
      );
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

