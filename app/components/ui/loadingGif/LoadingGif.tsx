import Image from 'next/image'
import { FC } from 'react'

import LoadingImg from '@/assets/images/loading.gif'

const LoadingGif: FC = () => {
	return <Image src={LoadingImg} width={100} height={100}></Image>
}

export default LoadingGif
