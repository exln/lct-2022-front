import dynamic from 'next/dynamic'
import { FC, useEffect } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { useQuery } from 'react-query'

import LoadingGif from '@/ui/loadingGif/LoadingGif'

import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'

import { CalcService } from '@/services/calc.service'
import { ExportService } from '@/services/export.service'

import styles from './answer.module.scss'

const Answer: FC<{ id: string }> = ({ id }) => {
	const MapWithNoSSR = dynamic(() => import('@/ui/mapBoxAnswer/MapBox'), {
		ssr: false,
	})
	const { request } = useTypedSelector((state) => state)
	const { isLoading, data, isError } = useQuery(
		['answer'],
		() => CalcService.sendToCalc(request, id),
		{
			select: ({ data }) => data,
			refetchOnWindowFocus: false,
			refetchOnMount: false,
		}
	)
	const {
		addAnswer,
		resetFavourite,
		resetAnswer,
		upPage,
		downPage,
		sortresponse,
		deleteInCart,
	} = useActions()
	const { answer, page } = useTypedSelector((state) => state)
	useEffect(() => {
		resetAnswer()
		// @ts-ignore
		if (data !== undefined) {
			if (data.length > 0) {
				addAnswer(data)
				sortresponse()
			}
		}
		resetFavourite()
	}, [isLoading])

	const inc = () => {
		console.log(answer.length)
		if (page.value + 1 < answer.length) {
			console.log('HI!!!!!!!!')
			upPage()
		}
	}
	const dec = () => {
		if (page.value - 1 >= 0) downPage()
	}
	const deleteInCartB = (id: string, page: number) => {
		const el = {
			id,
			page,
		}
		deleteInCart(el)
	}
	const initialValue = 0

	// @ts-ignore
	return (
		<>
			{isLoading && (
				<div className="text-center m-auto">
					<LoadingGif />
				</div>
			)}
			{isError && (
				<h1 className="text-center text-3xl text-red-800">Произошла ошибка</h1>
			)}
			{!isLoading && (
				<div className={styles.wrapper}>
					<button className={styles.ppButtons} onClick={() => dec()}>
						{page.value !== 0 && <FaArrowLeft />}
					</button>
					<div className={styles.content}>
						<div className={styles.mapContainer}>
							<h3>Карта</h3>
							<MapWithNoSSR />
						</div>
						<div>
							<h3>Аналоги</h3>
							<div className={styles.analogsContainer}>
								<div className={styles.locH}>
									{answer[page.value]?.requestH.location}
								</div>
								<ul className={styles.analogsList}>
									{answer[page.value]?.response.map((el) => (
										<li key={el.id}>
											<ul>
												<li className="font-thin">
													Вес: {el.weight.toFixed(2)}
												</li>
												<li className="text-sm">{el.location}</li>
												<hr className="my-1.5 h-px bg-gray-200 border-0 dark:bg-gray-700" />
												<li>
													{`Дом ${el.material}, ${
														el.segment > 0 ? el.segment : ''
													} ${el.floors} эт.`}
												</li>
												<li>
													м. {el.metro_id} ({el.metro_remoteness} мин.)
												</li>
												<hr className="my-1.5 h-px bg-gray-200 border-0 dark:bg-gray-700" />
												<li>
													{el.object_type} {el.setting} {el.floor} эт.{' '}
													{el.renovation !== 'Информация неизвестна'
														? el.renovation + ' ремонт'
														: ''}
												</li>
												<hr className="my-1.5 h-px bg-gray-200 border-0 dark:bg-gray-700" />
												<li>
													{el.rooms === 'студия'
														? 'Студия'
														: `${el.rooms} комнаты`}
													, {el.area} м&sup2;
												</li>
												<hr className="my-1.5 h-px bg-gray-200 border-0 dark:bg-gray-700" />
												{el.kitchen !== 0 && el.kitchen && (
													<>
														<li>Кухня: {el.kitchen}м&sup2;</li>
														<hr className="my-1.5 h-px bg-gray-200 border-0 dark:bg-gray-700" />
													</>
												)}
												{el.balcony === 'Да' && (
													<>
														<li>Есть балкон/лоджия</li>
														<hr className="my-1.5 h-px bg-gray-200 border-0 dark:bg-gray-700" />
													</>
												)}
												<li>Цена: {el.price.toLocaleString('ru')} &#8381;</li>
												<li>
													Цена за м&sup2;:{' '}
													{el.price_per_metre.toLocaleString('ru')} &#8381;
												</li>
											</ul>
											<button onClick={() => deleteInCartB(el.id, page.value)}>
												Удалить
											</button>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
					<button className={styles.ppButtons} onClick={() => inc()}>
						{page.value !== answer.length - 1 && <FaArrowRight />}
					</button>
					<div className="fixed bottom-0 right-0 flex m-2">
						<div className="shadow-2xl py-4 font-bold px-10 rounded-bl-xl rounded-tl-xl border border-gray-400 bg-white text-center">
							{!!answer[page.value] &&
								answer[page.value].response
									.reduce(
										(previousValue, currentValue) =>
											previousValue + currentValue.price * currentValue.weight,
										initialValue
									)
									.toLocaleString('ru')}{' '}
							&#8381;
							<br />
							{!!answer[page.value] &&
								(
									answer[page.value].response.reduce(
										(previousValue, currentValue) =>
											previousValue + currentValue.price * currentValue.weight,
										initialValue
									) / answer[page.value].requestH.area
								).toLocaleString('ru')}{' '}
							&#8381; за м&sup2;
							<br />
							ML: {answer[page.value]?.requestH.mlPrice.toLocaleString(
								'ru'
							)}{' '}
							&#8381;
						</div>
						<button
							className="shadow-2xl py-4 bg-green-200 font-bold px-10 rounded-br-xl rounded-tr-xl border border-gray-400"
							onClick={() => {
								ExportService.exportAnswer(answer, id)
							}}
						>
							Экспорт
						</button>
					</div>
				</div>
			)}
		</>
	)
}

export default Answer
