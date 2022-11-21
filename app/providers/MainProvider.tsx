import { FC, PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'

import { store } from '../store'

import AuthProvider from './AuthProvider'

const queryClient = new QueryClient()

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<AuthProvider>{children}</AuthProvider>
			</QueryClientProvider>
		</Provider>
	)
}

export default MainProvider
