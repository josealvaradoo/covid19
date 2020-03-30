import ReactGA from 'react-ga'

export default class GoogleAnalytics {
	constructor() {
		ReactGA.initialize("G-1Z9EC2W9JB")
	}

	static view(page) {
		ReactGA.pageview(page)
	}

	static event(data) {
		ReactGA.event(data)
	}
}