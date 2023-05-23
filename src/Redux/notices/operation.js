import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// const tokenForTestShlov = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NmM5MDg4M2U2MmUwYTE2MTg3YzlhYyIsImlhdCI6MTY4NDgzNjUwNCwiZXhwIjoxNjg0ODc5NzA0fQ.-lJQjjtqhUfXtiCu7FzeRNwJNUPaMOIJZD7sRa6hpAM';

axios.defaults.baseURL = 'https://fourtwo-back.onrender.com/';

export const fetchNotices = createAsyncThunk('notices/all', 
  async(_, thunkAPI) => {
    try {
      const response = await axios.get('/notices'
      // {
      //   headers: {
      //     Authorization: `Bearer ${tokenForTestShlov}`
      //   },
      // }
      );
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

