import { axiosClassic } from 'api/interceptors'

import { IRequest } from '@/components/screens/request/request.interface'

import { IAnswer } from '@/shared/interfaces/answer.type'

export const CalcService = {
	async sendToCalc(request: IRequest[], id: string) {
		return await axiosClassic.post<IAnswer[]>(
			`/data/${id}/calculate_data`,
			request
		)
	},
}
