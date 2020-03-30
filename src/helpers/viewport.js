import store from './../redux/store'

export default class Viewport {
	static isATailScreenSmartphone() {
		return store.getState().application.viewport.height > 700
	}

	static needsIncreaseCardsDimentions() {
		return store.getState().application.viewport.height > 700
	}

	static isInStandaloneMode = () => (
		(window.matchMedia('(display-mode: standalone)').matches) || (window.navigator.standalone) || document.referrer.includes('android-app://')
	)
}