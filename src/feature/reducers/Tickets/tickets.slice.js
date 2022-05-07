import { createSlice } from '@reduxjs/toolkit';
import { fetchTickets } from './tickets.actions';

const initialState = {
  realTicket: {},
  isError: null,
  isLoading: false,
};

const ticketsSlice = createSlice({
  name: '@@tickets',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state, action) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.realTicket = action.payload;
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.isError = action.payload;
        state.isLoading = false;
      });
  },
});

export default ticketsSlice.reducer;
