import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	filter: 'all',
};

const filterSlice = createSlice({
	name: '@@filter',
	initialState,
	reducers: {
		setFilter: (state, action) => {
			state.filter = action.payload;
		},
	},
});

export default filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
