import { configureStore } from '@reduxjs/toolkit'

import { pageReducer } from '@/store/page/page.slice'
import { requestApi } from '@/store/request/request.api'
import { requestReducer } from '@/store/request/request.slice'

import { answerReducer } from './answer/answer.slice'
import { reducer } from './user/user.slice'

export const store = configureStore({
	reducer: {
		[requestApi.reducerPath]: requestApi.reducer,
		request: requestReducer,
		answer: answerReducer,
		auth: reducer,
		page: pageReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(requestApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
