import { createAsyncThunk } from '@reduxjs/toolkit'
import { errorCatch } from 'api/api.helpers'
import router from 'next/router'

import { AuthService } from '@/services/auth.service'

import { IAuthResponse, InterfaceEmailPassword } from './user.interface'

export const register = createAsyncThunk<IAuthResponse, InterfaceEmailPassword>(
	'auth/register',
	async ({ email, password }, thunkAPI) => {
		try {
			const response = await AuthService.register(email, password)
			return response.data
		} catch (error) {
			// @ts-ignore
			console.log(error.message)
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const login = createAsyncThunk<IAuthResponse, InterfaceEmailPassword>(
	'auth/login',
	async ({ email, password }, thunkAPI) => {
		try {
			const response = await AuthService.login(email, password)
			console.log(response)
			router.push('/')
			return response.data
		} catch (error) {
			// @ts-ignore
			console.log(error.message)
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const logout = createAsyncThunk('auth/logout', async () => {
	await AuthService.logout()
	router.push('/auth')
})

export const checkAuth = createAsyncThunk<IAuthResponse>(
	'user/me',
	async (_, thunkAPI) => {
		try {
			const response = await AuthService.getNewTokens()
			return response.data
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				console.log('logout')
				thunkAPI.dispatch(logout())
			}
			return thunkAPI.rejectWithValue(error)
		}
	}
)
