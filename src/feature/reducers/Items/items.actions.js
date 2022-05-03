import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchItems = createAsyncThunk(
  '@@items/fetchItems',
  async (_, {rejectWithValue}) => {
    try {
      const res = await axios.get('http://localhost:5000/shopItems')
      return res.data;
    } catch (e) {
      return rejectWithValue(e.message)
    }
  }
);

export const fetchItem = createAsyncThunk(
  '@@items/fetchItem',
  async (id, {rejectWithValue}) => {
    try {
      const res = await axios.get(`http://localhost:5000/shopItems/${id}`)
      return res.data;
    } catch (e) {
      return rejectWithValue(e.message)
    }
  }
)