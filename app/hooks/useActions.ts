import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import { answerActions } from '@/store/answer/answer.slice'
import { pageActions } from '@/store/page/page.slice'
import { requestActions } from '@/store/request/request.slice'
import * as userActions from '@/store/user/user.actions'

const allActions = {
	...answerActions,
	...requestActions,
	...pageActions,
	...userActions,
}

export const useActions = () => {
	const dispatch = useDispatch()

	// @ts-ignore
	return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch])
}
