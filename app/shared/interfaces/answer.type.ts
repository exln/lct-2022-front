export interface Response {
	id: string
	source: string
	offer: string
	latitude: number
	longitude: number
	setting: string
	area: number
	object_type: string
	floor: number
	floors: number
	rooms: string
	metro_id: string
	metro_remoteness: number
	material: string
	segment: number
	kitchen: number
	balcony: string
	renovation: string
	additions: string
	price: number
	price_per_metre: number
}

export interface IAnswer {
	requestH: {
		id: number
		latitude: number
		longitude: number
		location: string
		area: number
		floor: number
		floors: number
		metro_remoteness: number
		rooms: number
		material: string
		segment: string
		kitchen: number
		balcony: string
		renovation: string
	}
	response: Response[]
}
