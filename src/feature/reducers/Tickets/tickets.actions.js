import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiService from "../../../services/ApiServices";

export const fetchTickets = createAsyncThunk(
  "@@tickets/fetchTickets",
  async (ticket, { rejectWithValue }) => {
    try {
      const res = await ApiService.getTickets(ticket);
      if (res.data.length > 0) {
        return res.data[0];
      } else {
        throw new Error("Купон неверный");
      }
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
