import { useState } from 'react'

// interface Field {
// 	name: string
// 	label?: string
// 	default?: string
// 	type?: string
// }

interface FormFields {
	[field: string]: {
		required?: boolean
		type?: boolean
	}
}

interface FormState {
	[field: string]: unknown
}

interface UseFormReturn {
	data: FormState
	props: { [field: string]: unknown }
}

export function useForm(fields: FormFields): UseFormReturn {
	// const initialState: FormState = fields.reduce((st, field) => {
	// 	let defaultVal = ''
	// 	if (field.default) defaultVal = field.default
	// 	return { ...st, [field.name]: defaultVal }
	// }, {})

	const [formData, setFormData] = useState<FormState>({})

	const props: FormState = Object.keys(fields).reduce((st, key) => {
		const field = fields[key]
		const current = {
			id: key,
			type: field.type,
			onChange: (val: any) => setFormData({ ...formData, [key]: val }),
			value: formData[key],
		}
		return { ...st, [key]: current }
	}, {})

	return { data: formData, props }
}
