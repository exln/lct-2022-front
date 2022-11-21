import { useQuery } from 'react-query'

import { RequestsService } from '@/services/requests.service'

export const useRequests = () => {
	const {
		isLoading,
		data: lastRequests,
		refetch,
	} = useQuery('Last requests', () => RequestsService.getAllRequests(), {
		select: ({ data }) => data,
	})

	return { isLoading, lastRequests, refetch }
}
