import dynamic from 'next/dynamic'
import { FC } from 'react'

import RequestsContainer from '@/components/screens/home/requests/requestsContainer'

import styles from './home.module.scss'

const MapWithNoSSR = dynamic(() => import('@/ui/mapBox/MapBox'), {
	ssr: false,
})

const Home: FC = () => {
	return (
		<div className={styles.homePage}>
			<div className={styles.mapContainer}>
				<h3>Карта</h3>
				<MapWithNoSSR />
			</div>
			<div className={styles.lastRequests}>
				<h3>Последние запросы</h3>
				<RequestsContainer />
			</div>
		</div>
	)
}

export default Home
