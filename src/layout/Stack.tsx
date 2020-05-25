import * as React from 'react'
import { StyleProps, Size } from '../styleUtils'
import { ResponsiveProp, resolvePrefixes } from '../reponsiveProp'
import classNames from 'classnames'

type StackProps = StyleProps & {
	children?: React.ReactNode
	space?: ResponsiveProp<Size>
	divide?: boolean
}

function resolveClassNames(props: StackProps): string {
	const classes = []

	if (props.space)
		classes.push(
			resolvePrefixes(props.space, (amt: string) => `space-y-${amt}`),
		)

	if (props.divide) classes.push('divide-y')

	return classNames(classes)
}

export function Stack({ children, ...rest }: StackProps) {
	return <div className={resolveClassNames(rest)}>{children}</div>
}
