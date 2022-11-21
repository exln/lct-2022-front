import { FC } from 'react'

import AuthForm from '@/components/screens/auth/authForm/AuthForm'

import styles from './auth.module.scss'

const Auth: FC = () => {
	return (
		<>
			<div className={styles.wrapper}>
				<AuthForm />
			</div>
		</>
	)
}

export default Auth
