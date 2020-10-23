import Base from './base'

export type List = {
	count: number
	next: string
	previous: string
	results: Base[]
}

export const listInstance = {
	count: 0,
	next: '',
	previous: '',
	results: [
		{
			name: '',
			url: '',
		},
	],
}
