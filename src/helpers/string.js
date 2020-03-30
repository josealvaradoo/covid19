export default class String {
	static slug(string) {
		return string.toLowerCase().replace(" ", "-")
	}
}