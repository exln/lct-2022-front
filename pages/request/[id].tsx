import { NextPage } from 'next'
import { useRouter } from 'next/router'

import Request from '@/components/screens/request/Request'

import Layout from '@/ui/layout/Layout'

const RequestPage: NextPage = () => {
	const router = useRouter()
	const id: string = router.query.id as string
	return (
		<Layout title={`Запрос № ${router.query.id}`}>
			<Request id={id} />
		</Layout>
	)
}

export default RequestPage
