import * as React from 'react'

interface Props {
	children: React.ReactNode
}
function Box(props: Props) {
	return <div>{props.children}</div>
}

export default Box