import { createSlice } from "@reduxjs/toolkit";
import { fetchItem, fetchItems } from "./items.actions";

const data = JSON.parse(localStorage.getItem("shop-items"));

const initialState = {
  shopItems: data ? data : [],
  isLoading: false,
  isError: null,
  item: {},
};

const itemsSlice = createSlice({
  name: "@@items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.shopItems = action.payload;
        localStorage.setItem("shop-items", JSON.stringify(state.shopItems));
      })
      .addCase(fetchItem.fulfilled, (state, action) => {
        state.item = action.payload;
      })
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state, action) => {
          state.isLoading = true;
          state.isError = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.isLoading = false;
          state.isError = action.payload;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state, action) => {
          state.isLoading = false;
          state.isError = null;
        }
      );
  },
});

export default itemsSlice.reducer;
