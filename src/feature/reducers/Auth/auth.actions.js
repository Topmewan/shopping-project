import { createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '../../../services/AuthService';

export const registration = createAsyncThunk(
	'@@auth/registration',
	async (registerData, { rejectWithValue }) => {
		try {
			const res = await AuthService.registerUser(registerData);
			return res.data;
		} catch (e) {
			return rejectWithValue(e.response.data);
		}
	}
);

export const login = createAsyncThunk(
	'@@auth/login',
	async (loginData, { rejectWithValue }) => {
		try {
			const res = await AuthService.loginUser(loginData);
			console.log(res.data);
			return res.data;
		} catch (e) {
			return rejectWithValue(e.message);
		}
	}
);

export const getUser = createAsyncThunk(
	'@@auth/getUser',
	async (id, { rejectWithValue }) => {
		try {
			const res = await AuthService.getUser(id);
			return res.data;
		} catch (e) {
			return rejectWithValue(e.message);
		}
	}
);
