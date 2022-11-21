import router from 'next/router'
import { FC } from 'react'

import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'

import { CalcService } from '@/services/calc.service'

import styles from './cart.module.scss'

const Cart: FC<{ id: string }> = ({ id }) => {
	const { request } = useTypedSelector((state) => state)
	const { resetFavourite } = useActions()

	const sendRequest = () => {
		if (request?.length > 0) {
			CalcService.sendToCalc(request, id)
			router.push(`/answer/${id}`)
		}
	}

	return (
		<div className={styles.cartWrapper}>
			<ul>
				{request.map((f) => (
					<li key={f.id} className={styles.cartComponent}>
						{f.location}
					</li>
				))}
			</ul>
			{request?.length > 0 && (
				<button onClick={() => sendRequest()}>Рассчитать</button>
			)}
		</div>
	)
}

export default Cart
