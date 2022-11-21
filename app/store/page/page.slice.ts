import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
	value: number
}

const initialState: CounterState = {
	value: 0,
}

export const pageSlice = createSlice({
	name: 'page',
	initialState,
	reducers: {
		upPage: (state) => {
			state.value += 1
		},
		downPage: (state) => {
			state.value -= 1
		},
	},
})

export const pageActions = pageSlice.actions
export const pageReducer = pageSlice.reducer
