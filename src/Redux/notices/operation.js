import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const tokenShlov = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NmM5MDg4M2U2MmUwYTE2MTg3YzlhYyIsImlhdCI6MTY4NDkzMTgzNSwiZXhwIjoxNjg0OTc1MDM1fQ.eA3LHBXAK6VB8ds04beE-SSsaLRU4LXpbUeHK1PB2_c'

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

export const fetchNotice = createAsyncThunk('notices/one',
  async(id, thunkAPI) => {
    try {
      const response = await axios.get(`/notices/${id}`, 
      {
        headers: {
          Authorization: `Bearer ${tokenShlov}`
        },
      }
      );
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getNoticeByCategory = createAsyncThunk(
  'notices/getNoticesByCategory',
  async ({ category }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/notices/${category}`, {
        params: { category },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
