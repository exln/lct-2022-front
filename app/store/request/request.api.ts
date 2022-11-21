import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const requestApi = createApi({
	reducerPath: 'request/api',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/' }),
	endpoints: (build) => ({
		searchRequest: build.query<any, string>({
			query: (search: string) => ({
				url: `/data/${search}`,
			}),
		}),
	}),
})

export const { useSearchRequestQuery } = requestApi
