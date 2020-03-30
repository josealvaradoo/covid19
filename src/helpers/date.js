import moment from 'moment'

export const today = () => {
	const date = new Date()
	const day = `${date.getDate()}`.length === 1 ? `0${date.getDate()}` : date.getDate()
	const month = `${date.getMonth()}`.length === 1 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
	const year = date.getFullYear()

	

	return `${year}-${month}-${day}`
}