import { ILastRequests } from '@/shared/interfaces/ILastRequests'

import { axiosClassic } from '../api/interceptors'

export const RequestsService = {
	async getAllRequests() {
		return axiosClassic.get<ILastRequests[]>('/data/requests/all')
	},
}
