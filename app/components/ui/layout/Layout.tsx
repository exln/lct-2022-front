import { FC, PropsWithChildren } from 'react'

import Header from '@/ui/layout/header/Header'

import Meta from '@/utils/meta/Meta'

import { IMeta } from '../../../utils/meta/meta.interaface'

import styles from './layout.module.scss'

const Layout: FC<PropsWithChildren<IMeta>> = ({ children, ...meta }) => {
	return (
		<>
			<Meta {...meta} />

			<main className={styles.main}>
				<section className={styles.content}>
					<Header />
					<div className={styles.wrapper}>{children}</div>
				</section>
			</main>
		</>
	)
}

export default Layout
