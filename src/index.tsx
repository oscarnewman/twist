import * as React from 'react'
import styles from './styles.module.css'

interface Props {
	text: string
}

export const ExampleComponent = ({ text }: Props) => {
	return (
		<div className={styles.test}>
			Example Component: {text}
			<div className='text-red-400'>hi</div>
			<div>Hi there</div>
		</div>
	)
}
