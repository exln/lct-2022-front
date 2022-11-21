import type { NextPage } from 'next'

import Home from '@/components/screens/home/Home'
import Layout from '@/components/ui/layout/Layout'

const HomePage: NextPage = () => {
	return (
		<>
			<Layout title="Главная">
				<Home />
			</Layout>
		</>
	)
}

export default HomePage
