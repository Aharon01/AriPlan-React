import { useEffect, useState } from 'react'
import styles from './DisplayText.module.scss'

const DisplayText = () => {
	const fullText = 'Твои задачи. Твой контроль.'
	const [displayText, setDisplayText] = useState('')
	const [isDeleting, setIsDeleting] = useState(false)

	useEffect(() => {
		let timeout

		if (!isDeleting) {
			if (displayText.length < fullText.length) {
				timeout = setTimeout(() => {
					setDisplayText(fullText.slice(0, displayText.length + 1))
				}, 80)
			} else {
				timeout = setTimeout(() => setIsDeleting(true), 1500)
			}
		} else {
			if (displayText.length > 0) {
				timeout = setTimeout(() => {
					setDisplayText(fullText.slice(0, displayText.length - 1))
				}, 40)
			} else {
				timeout = setTimeout(() => setIsDeleting(false), 500)
			}
		}

		return () => clearTimeout(timeout)
	}, [displayText, isDeleting])
	return <h1 className={styles.text}>{displayText}</h1>
}

export default DisplayText
