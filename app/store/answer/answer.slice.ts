import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IAnswer } from '@/shared/interfaces/answer.type'

const initialState: IAnswer[] = []

export const answerSlice = createSlice({
	name: 'answer',
	initialState,
	reducers: {
		addAnswer(state, action: PayloadAction<IAnswer>) {
			state.push(...action.payload)
		},
		sortresponse(state) {
			state.map((el) =>
				el.response.sort(function (a, b) {
					return b.weight - a.weight
				})
			)
		},

		deleteInCart(state, action: PayloadAction<any>) {
			state[action.payload.page].response = state[
				action.payload.page
			].response.filter((p) => p.id !== action.payload.id)
			let ini = 0
			for (let i = 0; i < state[action.payload.page].response.length; i++) {
				if (state[action.payload.page].response[i].all_corrections !== 0) {
					ini += 1 / state[action.payload.page].response[i].all_corrections
				}
			}
			console.log(ini)
			for (let i = 0; i < state[action.payload.page].response.length; i++) {
				state[action.payload.page].response[i].weight =
					1 / state[action.payload.page].response[i].all_corrections / ini
			}
		},
		resetAnswer: () => initialState,
	},
})

export const answerActions = answerSlice.actions
export const answerReducer = answerSlice.reducer
