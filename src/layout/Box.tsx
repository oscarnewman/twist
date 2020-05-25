import * as React from 'react'

import { ResponsiveProp } from '../reponsiveProp'
import { Size, Materials, StyleProps } from '../styleUtils'

import classnames from 'classnames'

type ResponsiveSize = ResponsiveProp<Size>

interface PaddingProps {
	p?: ResponsiveSize
	pl?: ResponsiveSize
	pr?: ResponsiveSize
	pt?: ResponsiveSize
	pb?: ResponsiveSize
	px?: ResponsiveSize
	py?: ResponsiveSize
}

export type BoxProps = StyleProps &
	PaddingProps & {
		children?: React.ReactNode
		component?: React.ElementType
		display?: ResponsiveProp<
			'block' | 'inline' | 'inline-block' | 'flex' | 'none'
		>
		flex?: boolean
		material?: keyof typeof Materials
	}

function resolveClassNames(props: BoxProps): string {
	let classes: string[] = []

	if (props.p) classes.push(`p-${props.p}`)
	if (props.pl) classes.push(`pl-${props.pl}`)
	if (props.pr) classes.push(`pr-${props.pr}`)
	if (props.pt) classes.push(`pt-${props.pt}`)
	if (props.pb) classes.push(`pb-${props.pb}`)
	if (props.py) classes.push(`py-${props.py}`)
	if (props.px) classes.push(`px-${props.px}`)

	if (props.flex || props?.display === 'flex') {
		classes.push('flex')
	}

	if (props.material) classes.push(Materials[props.material])

	if (props.tw) classes.push(classnames(props.tw))

	return classnames(classes)
}

export function Box({ children, component, ...rest }: BoxProps) {
	return <div className={resolveClassNames(rest)}>{children}</div>
}
