import { FC, useEffect, useMemo, useState } from 'react'

import Cart from '@/components/screens/request/cart/Cart'
import { IRequest } from '@/components/screens/request/request.interface'
import RequestItem from '@/components/screens/request/requestItem/RequestItem'

import LoadingGif from '@/ui/loadingGif/LoadingGif'

import { useDebounce } from '@/hooks/useDebounce'
import { useTypedSelector } from '@/hooks/useTypedSelector'

import { useSearchRequestQuery } from '@/store/request/request.api'

import styles from './request.module.scss'

const Request: FC<{ id: string }> = ({ id }) => {
	const [search, setSearch] = useState('')
	const debounced = useDebounce(search, 300)
	const { isLoading, isError, data } = useSearchRequestQuery(id, {
		skip: id === undefined,
	})

	const { request } = useTypedSelector((state) => state)

	useEffect(() => {
		console.log(debounced)
	}, [debounced])
	const dataMemo = useMemo(() => {
		if (search === '') {
			return data
		}
		return data.filter((el: IRequest) => {
			return el.location.toLowerCase().includes(search.toLowerCase())
		})
	}, [debounced, data])
	const dataMemo1 = useMemo(() => {
		if (!!data) {
			return data
				.filter((el: IRequest) => {
					return el.rooms === 1
				})
				.filter((el: IRequest) => {
					return el.location.toLowerCase().includes(search.toLowerCase())
				})
		}
	}, [debounced, data])
	const dataMemo2 = useMemo(() => {
		if (!!data) {
			return data
				.filter((el: IRequest) => {
					return el.rooms === 2
				})
				.filter((el: IRequest) => {
					return el.location.toLowerCase().includes(search.toLowerCase())
				})
		}
	}, [debounced, data])
	const dataMemo3 = useMemo(() => {
		if (!!data) {
			return data
				.filter((el: IRequest) => {
					return el.rooms === 3
				})
				.filter((el: IRequest) => {
					return el.location.toLowerCase().includes(search.toLowerCase())
				})
		}
	}, [debounced, data])
	const dataMemo4 = useMemo(() => {
		if (!!data) {
			return data
				.filter((el: IRequest) => {
					return el.rooms === 4
				})
				.filter((el: IRequest) => {
					return el.location.toLowerCase().includes(search.toLowerCase())
				})
		}
	}, [debounced, data])
	const dataMemo0 = useMemo(() => {
		if (!!data) {
			return data
				.filter((el: IRequest) => {
					return (
						el.rooms !== 4 && el.rooms !== 3 && el.rooms !== 2 && el.rooms !== 1
					)
				})
				.filter((el: IRequest) => {
					return el.location.toLowerCase().includes(search.toLowerCase())
				})
		}
	}, [debounced, data])
	return (
		<div className={styles.wrapper}>
			<h3>Запрос № {id}</h3>
			<h3 className={styles.hMobile}>Запрос</h3>
			<input
				type="text"
				className={styles.searchInput}
				placeholder="Поиск квартир..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<div className="flex"></div>
			{isError && (
				<p className="mb-5 text-red-500 text-xl text-center font-extrabold">
					Ошибка со стороны сервера!
				</p>
			)}
			<div className={styles.roomsGroup}>
				{isLoading && <LoadingGif />}
				{dataMemo1 && (
					<ul>
						<h3>1-комнатные</h3>
						{dataMemo1?.map((el: IRequest) => (
							<RequestItem key={el.id} {...el} />
						))}
					</ul>
				)}
				{dataMemo2 && (
					<ul>
						{isLoading && <LoadingGif />}
						<h3>2-комнатные</h3>
						{dataMemo2?.map((el: IRequest) => (
							<RequestItem key={el.id} {...el} />
						))}
					</ul>
				)}
				{dataMemo3 && (
					<ul>
						{isLoading && <LoadingGif />}
						<h3>3-комнатные</h3>
						{dataMemo3?.map((el: IRequest) => (
							<RequestItem key={el.id} {...el} />
						))}
					</ul>
				)}
				{dataMemo0 && (
					<ul>
						{isLoading && <LoadingGif />}
						<h3>Остальные</h3>
						{dataMemo0?.map((el: IRequest) => (
							<RequestItem key={el.id} {...el} />
						))}
					</ul>
				)}
			</div>
			<Cart id={id} />
		</div>
	)
}

export default Request
