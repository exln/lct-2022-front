import { axiosClassic } from 'api/interceptors'

import { IAnswer } from '@/shared/interfaces/answer.type'

export const ExportService = {
	async exportAnswer(request: IAnswer[], id: string) {
		return await axiosClassic
			.post(`/data/${id}/download`, request, {
				responseType: 'blob',
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
				},
			})
			.then((response) => {
				const url = window.URL.createObjectURL(new Blob([response.data]))
				const link = document.createElement('a')
				link.href = url
				link.setAttribute('download', 'export.xlsx')
				document.body.appendChild(link)
				link.click()
			})
	},
}
