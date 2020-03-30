export default class Render {
	static number(value) {
		console.log(value)
		try {
			return value !== undefined ? value : 0
		}
		catch {
			return 0
		}
		finally {
			return value ? value : 0
		}
	}
}