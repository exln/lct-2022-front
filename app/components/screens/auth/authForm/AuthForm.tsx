import Image from 'next/image'
import { FC } from 'react'
import { Resolver, useForm } from 'react-hook-form'

import { useActions } from '@/hooks/useActions'

import srcLogoDEPR from '@/assets/images/logo-DEPR.svg'

import styles from './authForm.module.scss'

type FormValues = {
	email: string
	password: string
}

const resolver: Resolver<FormValues> = async (values) => {
	return {
		values: !values.email ? {} : values,
		errors: !values.email
			? {
					email: {
						type: 'required',
						message: 'Это поле не должно быть пустым!',
					},
			  }
			: {},
	}
}

const AuthForm: FC = () => {
	const { login } = useActions()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: resolver,
	})
	const onSubmit = handleSubmit((data) => login(data))
	return (
		<>
			<div className={styles.preWrapper}>
				<div className={styles.wrapper}>
					<div className={styles.content}>
						<div className={styles.logoSvg1}>
							<Image
								src={srcLogoDEPR}
								draggable={false}
								alt={
									'Департамент экономической политики и развития города Москвы'
								}
								height={80}
								width={80}
							/>
						</div>
						<a href="htpps://ya.ru">
							<button className={styles.staffButton}>
								Войти через &nbsp;
								<span className="text-blue-800">staff.mos.ru</span>
							</button>
						</a>
						<div className={styles.separator}>или</div>
						<form onSubmit={onSubmit}>
							<div className={styles.inputText}>
								<input {...register('email')} placeholder="Логин" />
								{errors?.email && <p>{errors.email.message}</p>}
							</div>

							<div className={styles.inputText}>
								<input
									{...register('password')}
									placeholder="Пароль"
									type="password"
								/>
								{errors?.password && <p>{errors.password.message}</p>}
							</div>

							<button type="submit">Войти</button>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default AuthForm
