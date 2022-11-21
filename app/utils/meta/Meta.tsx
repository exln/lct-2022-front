import Head from 'next/head'
import { FC } from 'react'

import { IMeta } from './meta.interaface'

const Meta: FC<IMeta> = ({ description, title }) => {
	return (
		<>
			<Head>
				<title itemProp="headline">{title}</title>
				<link rel="shortcut icon" href="/favicon.png" type="image/png" />
				{description ? (
					<meta
						itemProp="description"
						name="description"
						content={description}
					/>
				) : (
					<meta name="robots" content="noindex, nofollow" />
				)}
			</Head>
		</>
	)
}

export default Meta
