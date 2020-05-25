import * as React from 'react'

interface Props {
	[prop: string]: unknown
}

export function TextInput(props: Props) {
	return <input {...props} />
}
