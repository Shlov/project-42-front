import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://fourtwo-back.onrender.com/';

export const fetchNotices = createAsyncThunk(
  'notices/all',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      const response = await axios.get('/notices', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success('Notices done! 👏');
      return response.data;
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
          Authorization: `Bearer ${token}`,
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
      if (search === '' && category) {
        const token = thunkAPI.getState().auth.token;
        const { data } = await axios.get(`/notices/${category}`, {
          params: { category, search },
          headers: { Authorization: `Bearer ${token}` },
        });
        return data;
      } else if (search !== '' && !category) {
        const { data } = await axios.get(`/notices/title/search`, {
          params: { search, category },
        });
        console.log(data);
        return data;
      } else {
        const { data } = await axios.get(`/notices/title/search/${category}`, {
          params: { search, category },
        });
        console.log(data);
        return data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNotice = createAsyncThunk(
  'notices/addNotice',
  async ({ formData }, thunkAPI) => {
    const navigate = useNavigate();
    try {
      const response = await axios.post('/notices/user', formData, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      });
      toast.success('Successfully added to notices');
      navigate('/notices');
      console.log(response);
    } catch (error) {
      if (error.response.status === 400) {
        toast.error('Notice creation error. Please try again🙏');
      }
      if (error.response.status === 500) {
        toast.error('Server error. Please try later🙏');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getFavoriteNotices = createAsyncThunk(
  'notices/user/favorite',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      const response = await axios.get('/notices/user/favorite', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data.data.notices);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
