import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from 'react-hot-toast';


axios.defaults.baseURL = 'https://fourtwo-back.onrender.com/';

export const fetchNotices = createAsyncThunk(
  'notices/all',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      const response = await axios.get(
        '/notices',
        {
          headers: {
            Authorization: `Bearer ${token}`
          },
        }
      );
      toast.success('Notices done! 👏');
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchNotice = createAsyncThunk(
  'notices/one',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      const response = await axios.get(`/notices/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getNoticeByCategory = createAsyncThunk(
  'notices/getNoticesByCategory',
  async ({ category, search }, thunkAPI) => {
    try {
      console.log(search);
      if(search === '' && category) {
        const token = thunkAPI.getState().auth.token;
        const { data } = await axios.get(`/notices/${category}`, {
          params: { category, search },
          headers: { Authorization: `Bearer ${token}`},
        });
        return data;
      } else if(search !== '' && !category) {
        const { data } = await axios.get(
          `/notices/title/search`,
          {
            params: { search, category },
          }
        );
        console.log(data);
        return data;
      } else {
        const { data } = await axios.get(
          `/notices/title/search/${category}`,
          {
            params: { search, category },
          }
        );
        console.log(data);
        return data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const addNotice = createAsyncThunk(
//   'notices/addNotice',
//   async ({ formData }, thunkAPI) => {
//     try {
//       const response = await axios.post('/notices/user', formData, {
//         headers: {
//           'content-type': 'multipart/form-data'
//         },
//       });
//       console.log(response.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
