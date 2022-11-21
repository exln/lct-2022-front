import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren, useEffect } from 'react'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const { user } = useAuth()
	const { checkAuth, logout } = useActions()
	const { pathname } = useRouter()
	const router = useRouter()
	useEffect(() => {
		const accessToken = Cookies.get('accessToken')
		// if (accessToken) checkAuth()
	}, []) // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		const refreshToken = Cookies.get('refreshToken')
		if (!refreshToken && user) logout()
	}, [pathname]) // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		if (!user) {
			router.push('/auth')
		}
	}, [pathname])

	return <>{children}</>
}

export default AuthProvider
