import FormData from 'form-data'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { BsCloudArrowDown } from 'react-icons/bs'

import { useActions } from '@/hooks/useActions'

import { FileService } from '@/services/file.service'

import defaultUserIcon from '@/assets//images/defaultUserIcon.webp'
import srcLogoAC from '@/assets/images/logo-AC.svg'
import srcLogoDEPR from '@/assets/images/logo-DEPR.svg'

import styles from './header.module.scss'

const Header: FC = () => {
	const { logout } = useActions()

	const handleFile = async (e: any) => {
		const file = e.target.files[0]
		let formData: FormData = new FormData()
		formData.append('file', file)
		try {
			// @ts-ignore
			await FileService.upload(formData)
			console.log(FileService)
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<header className={styles.header}>
			<Link href="/">
				<a className={styles.logoBlock}>
					<div className={styles.logoSvg1}>
						<Image
							src={srcLogoDEPR}
							draggable={false}
							alt={
								'Департамент экономической политики и развития города Москвы'
							}
							height={56}
							width={56}
						/>
					</div>
					<div className={styles.logoSvg2}>
						<Image
							src={srcLogoAC}
							draggable={false}
							alt={'Аналитический центр Москвы'}
							height={56}
							width={320}
						/>
					</div>
				</a>
			</Link>
			<div className={styles.userBlock}>
				<form action="#" className={styles.fileForm}>
					<label
						onChange={handleFile}
						htmlFor="formId"
						className={styles.fileFormClick}
					>
						<input name="" type="file" id="formId" accept=".xlsx" hidden />
						<p className={styles.fileName}>
							Импортировать&nbsp;&nbsp;
							<BsCloudArrowDown />
						</p>
					</label>
				</form>
				<div className={styles.userIcon} onClick={() => logout()}>
					<Image
						src={defaultUserIcon}
						width={48}
						height={48}
						className={styles.userIconImage}
					/>
				</div>
			</div>
		</header>
	)
}

export default Header
