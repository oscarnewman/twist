import classnames from 'classnames'

export type ResponsiveProp<Atom> =
	| Atom
	| Readonly<[Atom]>
	| Readonly<[Atom, Atom]>
	| Readonly<[Atom, Atom, Atom]>
	| Readonly<[Atom, Atom, Atom, Atom]>
	| Readonly<[Atom, Atom, Atom, Atom, Atom]>

export function resolvePrefixes(
	prop: ResponsiveProp<any>,
	resolver: (p: any) => string,
): string {
	if (typeof prop === 'string' || typeof prop === 'number') {
		return resolver(prop) as string
	}

	const prefixes = ['', 'sm:', 'md:', 'lg:', 'xl:']
	const classes = []

	if (!('length' in prop)) {
		throw new Error('Invalid prop passed')
	}
	const { length } = prop
	for (let i = 0; i < length; i++) {
		classes.push(`${prefixes[i]}${resolver(prop[i])}`)
	}

	return classnames(classes)
}
