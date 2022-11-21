import { axiosClassic } from 'api/interceptors'
import Router from 'next/router'

export const FileService = {
	async upload(file: FormData, folder?: string) {
		return axiosClassic
			.post<{ url: string; name: string }[]>('/data/upload', file, {
				params: {
					folder,
				},
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then(async function (response) {
				// @ts-ignore
				await Router.push(`/request/${response.data.fileid}`)
			})
	},
}
