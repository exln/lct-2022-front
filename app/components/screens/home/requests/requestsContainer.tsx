import { format } from 'date-fns'
import router from 'next/router'
import { FC } from 'react'

// import { CiPlay1 } from 'react-icons/ci'
import styles from '@/components/screens/home/home.module.scss'

import LoadingGif from '@/ui/loadingGif/LoadingGif'

import { ILastRequests } from '@/shared/interfaces/ILastRequests'

import { useRequests } from './useRequests'

const { ru } = require('date-fns/locale')

const RequestsContainer: FC = () => {
	const { lastRequests, isLoading } = useRequests()

	return (
		<div className={styles.requestsContainer}>
			{' '}
			{isLoading && <LoadingGif />}
			<ul>
				{lastRequests?.map((el: ILastRequests) => (
					<li
						key={el.request_id}
						className="cursor-pointer"
						onClick={() => router.push(`/request/${el.request_id}`)}
					>
						<div>
							<h4>№ {el.request_id}</h4>
							от{' '}
							{format(new Date(el.created_at), 'd MMMM, yyyy hh:mm', {
								locale: ru,
							})}
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default RequestsContainer
