import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import Router from './router'
import Notification from './components/notifications/notification'
import Drawer from './components/drawer/drawer'
import { setViewportDimentions } from './redux/ducks/applicaton'
import GoogleAnalytics from './helpers/google-analytics'

const App = ({user, menuIsOpen, notification, keyboardOnFocus, handleViewportResize}) => {
	useEffect(() => {
		window.addEventListener('resize', () => {
			handleViewportResize({
				width: window.innerWidth,
				height: window.innerHeight,
				virtualKeyboardIsOpen: keyboardOnFocus && (window.innerHeight < 700)
			})
		})

		window.addEventListener('beforeinstallprompt', (e) => {
			e.preventDefault();
			window.deferredPrompt = e;
		})

		// Config React Google Analytics
		GoogleAnalytics.init('G-1Z9EC2W9JB')
	}, [keyboardOnFocus, handleViewportResize])

	return (
		<div className="App">
		{notification.code && <Notification />}
		{menuIsOpen && user && <Drawer />}
		<Router />
		</div>
	)
}

const mapStateToProps = state => ({
	user: state.user,
	menuIsOpen: state.menu,
	notification: state.notification,
	keyboardOnFocus: state.application.keyboardOnFocus
})

const mapDispatchToProps = dispatch => ({
	handleViewportResize(viewport) {
		dispatch(setViewportDimentions(viewport))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(App)