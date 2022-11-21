import { NextPage } from 'next'
import { useRouter } from 'next/router'

import Answer from '@/components/screens/answer/Answer'

import Layout from '@/ui/layout/Layout'

const AnswerPage: NextPage = () => {
	const router = useRouter()
	const id: string = router.query.id as string
	return (
		<Layout title={`Запрос № ${router.query.id}`}>
			<Answer id={id} />
		</Layout>
	)
}

export default AnswerPage
