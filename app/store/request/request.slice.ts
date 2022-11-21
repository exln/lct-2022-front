import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IRequest } from '@/components/screens/request/request.interface'

const initialState: IRequest[] = []

export const requestSlice = createSlice({
	name: 'request',
	initialState,
	reducers: {
		addFavourite(state, action: PayloadAction<IRequest>) {
			state.push(action.payload)
		},
		removeFavourite(state, action: PayloadAction<{ id: number }>) {
			return state.filter((p) => p.id !== action.payload.id)
		},
		resetFavourite: () => initialState,
	},
})

export const requestActions = requestSlice.actions
export const requestReducer = requestSlice.reducer
