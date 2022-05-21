import { createSlice } from '@reduxjs/toolkit';
import { registration, login, getUser, updateUser } from './auth.actions';

const initialState = {
	user: JSON.parse(localStorage.getItem('user')) || null,
	isError: null,
};

const authSlice = createSlice({
	name: '@@auth',
	initialState,
	reducers: {
		logOut: (state, action) => {
			localStorage.removeItem('user');
			state.user = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(registration.fulfilled, (state, action) => {
				state.user = action.payload.user;
				localStorage.setItem('user', JSON.stringify(action.payload.user));
			})
			.addCase(login.fulfilled, (state, action) => {
				state.user = action.payload.user;
				localStorage.setItem('user', JSON.stringify(action.payload.user));
			})

			.addCase(getUser.fulfilled, (state, action) => {
				state.user = action.payload;
				localStorage.setItem('user', JSON.stringify(action.payload));
			})
			.addCase(updateUser.fulfilled, (state, action) => {
				state.user = action.payload;
				localStorage.setItem('user', JSON.stringify(action.payload));
			})
			.addMatcher(
				(action) => action.type.endsWith('/pending'),
				(state, action) => {
					state.isError = null;
				}
			)
			.addMatcher(
				(action) => action.type.endsWith('/rejected'),
				(state, action) => {
					state.isError = action.payload;
				}
			);
	},
});

export default authSlice.reducer;
export const { logOut } = authSlice.actions;
