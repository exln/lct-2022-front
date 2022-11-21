import cn from 'classnames'
import React, { FC } from 'react'

import { IRequest } from '@/components/screens/request/request.interface'
import styles from '@/components/screens/request/request.module.scss'

import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'

const RequestItem: FC<IRequest> = (el) => {
	const { request } = useTypedSelector((state) => state)

	const isExistsInFavourite = request.some((p) => p.id === el.id)

	const { addFavourite, removeFavourite } = useActions()

	const addToFavourite = () => {
		addFavourite(el)
	}

	const removeFromFavourite = () => {
		removeFavourite(el)
	}

	return (
		<li key={el.id} className={styles.liComponent}>
			<div className={styles.title}>
				<div className={styles.location}>
					<label className={cn(styles.togglerWrapper, styles.style1)}>
						<input
							type="checkbox"
							checked={isExistsInFavourite}
							onChange={() => {
								!isExistsInFavourite ? addToFavourite() : removeFromFavourite()
							}}
						/>
						<div className={styles.togglerSlider}>
							<div className={styles.togglerKnob}></div>
						</div>
					</label>
					{el.location}
				</div>
			</div>
			<div className={styles.description}>
				<ul>
					<li>{el.area} м&sup2;</li>
					{el.balcony == 'Да' && <li>Есть балкон</li>}
					<li>{el.floor} этаж</li>
					<li>{el.material}</li>
					<li>До метро {el.metro_remoteness} мин.</li>
					<li>{el.renovation}</li>
					<li>{el.rooms === 'Студия' ? 'Студия' : el.rooms + ' комнаты'}</li>
					<li>{el.segment}</li>
				</ul>
			</div>
		</li>
	)
}

export default RequestItem
