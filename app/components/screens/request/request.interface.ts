export interface IRequest {
	id: number
	location: string
	rooms: number | string
	segment: string
	floors: number
	material: string
	floor: number
	area: number
	kitchen: number
	balcony: string
	metro_remoteness: number
	renovation: string
}

export interface ServerResponse {
	total_count: number
	incomplete_results: boolean
	items: IRequest[]
}
