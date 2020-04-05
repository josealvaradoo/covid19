export default class GoogleAnalytics {
	static trackingId
	
	static init(trackingId, config = {})
	{
		(function(w, d, s, a, t, c, m, o) {
			w.dataLayer = w.dataLayer || [];
			w[t] = w[t] || function gtag() { w.dataLayer.push(arguments); }
			w.gtag('js', new Date());
			w.gtag('config', a, c)
			m = d.getElementsByTagName(s)[0]
			o = d.createElement(s)

			o.async = 1
			o.src = `https://www.googletagmanager.com/gtag/js?id=${a}`
			m.parentNode.insertBefore(o, m)

			GoogleAnalytics.trackingId = a
		})(window, document, 'script', trackingId, 'gtag', config)
	}

	static verifyConfig()
	{
		if(!this.trackingId) {
			console.log('Google Analytics: A G-tracking ID is required')
			return
		}

		if(!window.gtag || typeof window.gtag !== 'function') {
			console.log('Google Analytics: Wrong config about gtag')
			return
		}
	}

	static event(name, data)
	{
		this.verifyConfig()

		if(!name) {
			console.log('Google Analytics: Event name is required')
			return
		}

		if (!data) {
			console.log('Google Analytics: Event data is required')
			return
		}

		window.gtag('event', name, data)
	}

	static view(data = {})
	{
		this.verifyConfig()
		this.event('page_view', data)
	}
}