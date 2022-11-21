import { IUser } from '@/shared/interfaces/user.types'

export interface IUserState {
	name: string
	email: string
}

export interface ITokens {
	accessToken: string
	refreshToken: string
}

export interface IUserInitialState {
	user: IUserState | null
	isLoading: boolean
}

export interface InterfaceEmailPassword {
	email: string
	password: string
}

export interface IAuthResponse extends ITokens {
	user: IUser
}
